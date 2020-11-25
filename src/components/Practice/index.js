import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { shuffleArray } from "../../misc/utils";
import { useForceUpdate } from "../../misc/custom-hooks";
import createTask from "./createTask";
import { database } from "../../misc/firebase";
import { useProfile } from "../../context/profile.context";
import { useSubject } from "../../context/subject.context";
import { actionCreator } from "../../actions";
import PracticePage from "../../pages/practice-page";
import ResultsPage from "../../pages/results-page";
import { Animation } from "rsuite";

const { Slide } = Animation;

const MAX_TASKS = 10;

function Practice({
  setVariants,
  setTask,
  setAnswer,
  setSides,
  setCoordinates,
  setPracticePopupMessage,
  resetAnimationCount,
}) {
  const { type } = useParams();
  const forceUpdate = useForceUpdate();
  const [typeProgress, setTypeProgress] = useState(0);
  const { profile } = useProfile();
  const { lessons } = useSubject();

  const { answer, variants, expression, coordinates, sides } = createTask(type);

  setAnswer(answer);
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
        if (everydayProgress < 100) {
          await databaseProfile.update({
            everydayProgress: everydayProgress + 10,
            lingots: lingots + 2,
          });
        } else {
          await databaseProfile.update({
            lingots: lingots + 2,
          });
        }
        // setTimeout(() => window.location.replace("/"), 1500);
      } else {
        setTypeProgress(typeProgress + 20);
        setPracticePopupMessage("Success");
      }
    } else {
      setPracticePopupMessage("Fail");
      if (typeProgress >= 10) {
        setTypeProgress(typeProgress - 10);
      } else {
        forceUpdate();
      }
    }
  }

  return typeProgress === 100 ? (
    <Slide in={true} placement="right">
      <ResultsPage />
    </Slide>
  ) : (
    <PracticePage
      progress={typeProgress}
      resetAnimationCount={resetAnimationCount}
      skipAnswer={() => forceUpdate()}
      checkAnswer={checkAnswer}
    />
  );
}

// const mapStateToProps = (state) => ({
//   answer: state.answer,
// });

const mapDispatchToProps = (dispatch) => ({
  setVariants: (payload) => dispatch(actionCreator.setVariants(payload)),
  setTask: (payload) => dispatch(actionCreator.setTask(payload)),
  setAnswer: (payload) => dispatch(actionCreator.setAnswer(payload)),
  setCoordinates: (payload) => dispatch(actionCreator.setCoordinates(payload)),
  setSides: (payload) => dispatch(actionCreator.setSides(payload)),
  setPracticePopupMessage: (payload) =>
    dispatch(actionCreator.setPracticePopupMessage(payload)),
  resetAnimationCount: () => dispatch(actionCreator.resetAnimationCount()),
});

export default connect(null, mapDispatchToProps)(Practice);
