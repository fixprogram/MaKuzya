import React from "react";
import { connect } from "react-redux";
import { actionCreatorPractice } from "../../../actions";

const PracticeButtons = ({
  checkAnswer,
  skipAnswer,
  isNextDisabled,
  setActiveRadio,
  disabled,
}) => {
  return (
    <section className="practice_buttons_wrapper">
      <div className="practice_buttons">
        <article className="practice_buttons_inner">
          <button
            className="practice_button"
            onClick={() => {
              skipAnswer();
              setActiveRadio(-1);
            }}
            disabled={disabled}
          >
            Skip
          </button>

          <button
            className={`practice_button ${
              isNextDisabled ? "disabled" : "enabled"
            }`}
            onClick={() => {
              checkAnswer();
              setActiveRadio(-1);
            }}
            disabled={disabled || isNextDisabled}
          >
            Check
          </button>
        </article>
      </div>
    </section>
  );
};

export default PracticeButtons;
