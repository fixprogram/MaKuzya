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
  setTask,
  setPracticePopupMessage,
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
      const task = createTask(type);

      setTask(task);
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
  answer: state.practice.currentTask.answer,
  practiceProgress: state.practice.practiceProgress,
  isSkipping: state.practice.isSkipping,
});

const mapDispatchToProps = (dispatch) => ({
  setTask: (payload) => dispatch(actionCreatorPractice.setTask(payload)),
  setPracticeProgress: (payload) =>
    dispatch(actionCreatorPractice.setPracticeProgress(payload)),
  setPracticePopupMessage: (payload) =>
    dispatch(actionCreatorPractice.setPracticePopupMessage(payload)),
  setIsSkipping: () => dispatch(actionCreatorPractice.setIsSkipping()),
  resetPracticeProgress: () =>
    dispatch(actionCreatorPractice.resetPracticeProgress()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
