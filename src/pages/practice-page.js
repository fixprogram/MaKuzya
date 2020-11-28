import React from "react";
import PropTypes from "prop-types";

import ProgressBar from "../components/ProgressBar";
import PracticeContent from "../components/PracticeContent";
import { Link } from "react-router-dom";

const PracticePage = ({ progress, resetPracticeProgress, checkAnswer }) => {
  return (
    <section className="practice_block">
      <ProgressBar progress={progress}>
        <Link
          className="progress_close"
          to="/"
          onClick={resetPracticeProgress}
        ></Link>
      </ProgressBar>

      <PracticeContent checkAnswer={checkAnswer} />
    </section>
  );
};

export default PracticePage;

PracticePage.propTypes = {
  progress: PropTypes.number.isRequired,
  resetPracticeProgress: PropTypes.func,
  checkAnswer: PropTypes.func,
};
