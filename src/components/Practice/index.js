import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { shuffleArray, fracToNum, roundTo } from "../../misc/utils";
import createTask from "./createTask";
import { database } from "../../misc/firebase";
import { useProfile } from "../../context/profile.context";
import { useSubject } from "../../context/subject.context";
import { actionCreator } from "../../actions";
import PracticePage from "../../pages/practice-page";
import ResultsPage from "../../pages/results-page";

const MAX_TASKS = 10;

function Practice({
  setVariants,
  setTask,
  setAnswer,
  setSides,
  setCoordinates,
  setPracticePopupMessage,
  setCharts,
  answer,
  practiceProgress,
  setPracticeProgress,
  resetPracticeProgress,
  isSkipping,
  setIsSkipping,
}) {
  const { type } = useParams();
  const { profile } = useProfile();
  const { lessons } = useSubject();

  useEffect(() => {
    if (practiceProgress < 100) {
      const {
        answer,
        variants,
        expression,
        coordinates,
        sides,
        charts,
      } = createTask(type);

      setAnswer(answer);
      if (variants) setVariants(shuffleArray(variants));
      if (expression) setTask(expression);
      if (coordinates) setCoordinates(coordinates);
      if (sides) setSides(sides);
      if (charts) setCharts(charts);
    }
  }, [practiceProgress, isSkipping]);

  const { uid, activeSubject, lingots, everydayProgress } = profile;
  const progress = profile.progress[`${activeSubject.toLowerCase()}`][0];
  const typeIndex = lessons.map((lesson) => lesson.id).indexOf(type);

  async function checkAnswer(value) {
    console.log("VAL: ", value);
    console.log("ANS: ", answer);
    if (typeof value === "string") value = fracToNum(value);

    if (
      answer == value ||
      roundTo(answer, 2) === roundTo(value, 2) ||
      (answer[0] == value[0] && answer[1] == value[1])
    ) {
      if (practiceProgress + 20 >= MAX_TASKS * 10) {
        // Finishing. Report
        setPracticeProgress(practiceProgress + 20);
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
        setPracticeProgress(practiceProgress + 20);
        setPracticePopupMessage("Success");
      }
    } else {
      setPracticePopupMessage("Fail");
      if (practiceProgress >= 10) {
        setPracticeProgress(practiceProgress - 10);
      } else {
        setIsSkipping();
      }
    }
  }

  return practiceProgress >= 100 ? (
    <ResultsPage />
  ) : (
    <PracticePage
      progress={practiceProgress}
      resetPracticeProgress={resetPracticeProgress}
      skipAnswer={() => setIsSkipping()}
      checkAnswer={checkAnswer}
    />
  );
}

const mapStateToProps = (state) => ({
  answer: state.answer,
  practiceProgress: state.practiceProgress,
  isSkipping: state.isSkipping,
});

const mapDispatchToProps = (dispatch) => ({
  setVariants: (payload) => dispatch(actionCreator.setVariants(payload)),
  setTask: (payload) => dispatch(actionCreator.setTask(payload)),
  setPracticeProgress: (payload) =>
    dispatch(actionCreator.setPracticeProgress(payload)),
  setAnswer: (payload) => dispatch(actionCreator.setAnswer(payload)),
  setCoordinates: (payload) => dispatch(actionCreator.setCoordinates(payload)),
  setSides: (payload) => dispatch(actionCreator.setSides(payload)),
  setCharts: (payload) => dispatch(actionCreator.setCharts(payload)),
  setPracticePopupMessage: (payload) =>
    dispatch(actionCreator.setPracticePopupMessage(payload)),
  setIsSkipping: () => dispatch(actionCreator.setIsSkipping()),
  resetPracticeProgress: () => dispatch(actionCreator.resetPracticeProgress()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
