import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import ProgressBar from "../ProgressBar";
import PracticeContent from "../PracticeContent";
import { shuffleArray } from "../../misc/utils";
import { useForceUpdate } from "../../misc/custom-hooks";
import createTask from "./createTask";
import { database } from "../../misc/firebase";
import { useProfile } from "../../context/profile.context";
import { useSubject } from "../../context/subject.context";
import { actionCreator } from "../../reducer";

const MAX_TASKS = 10;

function Practice({
  setVariants,
  setTask,
  setSides,
  setCoordinates,
  setTopic,
}) {
  const { type } = useParams();
  const forceUpdate = useForceUpdate();
  const [progress, setProgress] = useState(0);
  const { profile } = useProfile();
  const { lessons } = useSubject();

  const { variants, expression, coordinates, sides, topic } = createTask(type);

  console.log("OORDINATES: ", coordinates);

  setVariants(shuffleArray(variants));
  setTask(expression);
  setCoordinates(coordinates);
  setSides(sides);
  setTopic(topic);

  const typeIndex = lessons.map((lesson) => lesson.id).indexOf(type);

  async function checkAnswer(value) {
    console.log("TOPI_INDEX: ", typeIndex);
    if (value) {
      if (progress + 20 >= MAX_TASKS * 10) {
        // Finishing. Report
        setProgress(progress + 20);
        await database.ref(`/profiles/${profile.uid}`).set({
          ...profile,
          algebraProgress: [
            ...profile.algebraProgress.slice(0, typeIndex),
            profile.algebraProgress[typeIndex] + 10,
            ...profile.algebraProgress.slice(typeIndex + 1),
          ],
          lingots: profile.lingots + 2,
        });
        setTimeout(() => window.location.replace("/"), 1500);
      } else {
        setProgress(progress + 20);
      }
    } else {
      setProgress(progress - 10);
    }
  }

  return (
    <section className="practice_block">
      <ProgressBar progress={progress}>
        <Link className="progress_close" to="/"></Link>
      </ProgressBar>

      <PracticeContent
        checkAnswer={(value) => checkAnswer(value)}
        skipAnswer={() => forceUpdate()}
      />
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setVariants: (payload) => dispatch(actionCreator.setVariants(payload)),
  setTask: (payload) => dispatch(actionCreator.setTask(payload)),
  setCoordinates: (payload) => dispatch(actionCreator.setCoordinates(payload)),
  setSides: (payload) => dispatch(actionCreator.setSides(payload)),
  setTopic: (payload) => dispatch(actionCreator.setTopic(payload)),
});

export default connect(null, mapDispatchToProps)(Practice);
