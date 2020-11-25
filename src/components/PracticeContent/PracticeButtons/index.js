import React from "react";

const PracticeButtons = ({
  checkAnswer,
  skipAnswer,
  isNextDisabled,
  answer,
  setActiveRadio,
  disabled,
}) => {
  console.log("DISABLED: ", disabled);
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
            Continue
          </button>
        </article>
      </div>
    </section>
  );
};

export default PracticeButtons;
