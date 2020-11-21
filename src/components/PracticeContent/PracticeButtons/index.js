import React from "react";

const PracticeButtons = ({
  checkAnswer,
  skipAnswer,
  isNextDisabled,
  answer,
  setActiveRadio,
}) => {
  return (
    <section className="practice_buttons_wrapper">
      <div className="practice_buttons">
        <article className="practice_buttons_inner">
          <button className="practice_button" onClick={skipAnswer}>
            Пропустить
          </button>

          <button
            className={`practice_button ${
              isNextDisabled ? "disabled" : "enabled"
            }`}
            onClick={() => {
              checkAnswer(answer);
              setActiveRadio(-1);
            }}
          >
            Продолжить
          </button>
        </article>
      </div>
    </section>
  );
};

export default PracticeButtons;
