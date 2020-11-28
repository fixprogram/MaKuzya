import React from "react";

import ProgressBar from "../components/ProgressBar";
import PracticeContent from "../components/PracticeContent";
import { Link } from "react-router-dom";

const PracticePage = ({
  progress,
  resetPracticeProgress,
  checkAnswer,
  skipAnswer,
}) => {
  return (
    <section className="practice_block">
      <ProgressBar progress={progress}>
        <Link
          className="progress_close"
          to="/"
          onClick={resetPracticeProgress}
        ></Link>
      </ProgressBar>

      <PracticeContent checkAnswer={checkAnswer} skipAnswer={skipAnswer} />
    </section>
  );
};

export default PracticePage;
