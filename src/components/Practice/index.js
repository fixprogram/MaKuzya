import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { shuffleArray, fracToNum, roundTo } from "../../misc/utils";
import createTask from "./createTask";
import { actionCreatorPractice } from "../../actions";
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

  async function checkAnswer(value) {
    if (typeof value === "string") value = fracToNum(value);

    if (
      answer === +value ||
      answer === value ||
      roundTo(answer[0], 5) === roundTo(value, 5) ||
      (answer[0] === value[0] &&
        answer[1] === value[1] &&
        answer[0] !== undefined)
    ) {
      if (practiceProgress + 20 >= MAX_TASKS * 10) {
        // Finishing. Report
        setPracticeProgress(practiceProgress + 20);
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
    <ResultsPage type={type} />
  ) : (
    <PracticePage
      progress={practiceProgress}
      resetPracticeProgress={resetPracticeProgress}
      checkAnswer={checkAnswer}
    />
  );
}

const mapStateToProps = (state) => ({
  answer: state.practice.answer,
  practiceProgress: state.practice.practiceProgress,
  isSkipping: state.practice.isSkipping,
});

const mapDispatchToProps = (dispatch) => ({
  setVariants: (payload) =>
    dispatch(actionCreatorPractice.setVariants(payload)),
  setTask: (payload) => dispatch(actionCreatorPractice.setTask(payload)),
  setPracticeProgress: (payload) =>
    dispatch(actionCreatorPractice.setPracticeProgress(payload)),
  setAnswer: (payload) => dispatch(actionCreatorPractice.setAnswer(payload)),
  setCoordinates: (payload) =>
    dispatch(actionCreatorPractice.setCoordinates(payload)),
  setSides: (payload) => dispatch(actionCreatorPractice.setSides(payload)),
  setCharts: (payload) => dispatch(actionCreatorPractice.setCharts(payload)),
  setPracticePopupMessage: (payload) =>
    dispatch(actionCreatorPractice.setPracticePopupMessage(payload)),
  setIsSkipping: () => dispatch(actionCreatorPractice.setIsSkipping()),
  resetPracticeProgress: () =>
    dispatch(actionCreatorPractice.resetPracticeProgress()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
