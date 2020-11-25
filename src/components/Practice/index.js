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
import { actionCreator } from "../../actions";

const MAX_TASKS = 10;

function Practice({
  answer,
  setVariants,
  setTask,
  setSides,
  setCoordinates,
  resetAnimationCount,
}) {
  const { type } = useParams();
  const forceUpdate = useForceUpdate();
  const [typeProgress, setTypeProgress] = useState(0);
  const { profile } = useProfile();
  const { lessons } = useSubject();

  const { variants, expression, coordinates, sides } = createTask(type);

  setVariants(shuffleArray(variants));
  setTask(expression);
  setCoordinates(coordinates);
  setSides(sides);

  const { uid, activeSubject, lingots, everydayProgress } = profile;
  const progress = profile.progress[`${activeSubject.toLowerCase()}`][0];
  const typeIndex = lessons.map((lesson) => lesson.id).indexOf(type);

  async function checkAnswer(value) {
    if (value == answer) {
      if (typeProgress + 20 >= MAX_TASKS * 10) {
        // Finishing. Report
        setTypeProgress(typeProgress + 20);
        const newItem = progress[typeIndex] + 10;

        const databaseProgress = database.ref(
          `/profiles/${uid}/progress/${activeSubject.toLowerCase()}`
        );
        const databaseProfile = database.ref(`/profiles/${uid}`);

        await databaseProgress.update({
          0: [
            ...progress.slice(0, typeIndex),
            newItem,
            ...progress.slice(typeIndex + 1),
          ],
        });
        await databaseProfile.update({
          everydayProgress: everydayProgress + 10,
          lingots: lingots + 2,
        });
        setTimeout(() => window.location.replace("/"), 1500);
      } else {
        setTypeProgress(typeProgress + 20);
      }
    } else {
      setTypeProgress(typeProgress - 10);
    }
  }

  return (
    <section className="practice_block">
      <ProgressBar progress={typeProgress}>
        <Link
          className="progress_close"
          to="/"
          onClick={resetAnimationCount}
        ></Link>
      </ProgressBar>

      <PracticeContent
        checkAnswer={(value) => checkAnswer(value)}
        skipAnswer={() => forceUpdate()}
      />
    </section>
  );
}

const mapStateToProps = (state) => ({
  answer: state.answer,
});

const mapDispatchToProps = (dispatch) => ({
  setVariants: (payload) => dispatch(actionCreator.setVariants(payload)),
  setTask: (payload) => dispatch(actionCreator.setTask(payload)),
  setCoordinates: (payload) => dispatch(actionCreator.setCoordinates(payload)),
  setSides: (payload) => dispatch(actionCreator.setSides(payload)),
  resetAnimationCount: () => dispatch(actionCreator.resetAnimationCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
