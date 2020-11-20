import React from "react";

const PracticeButtons = ({
  inputValue,
  skipAnswer,
  recoverState,
  isNextDisabled,
}) => {
  return (
    <section className="practice_buttons_wrapper">
      <div className="practice_buttons">
        <article className="practice_buttons_inner">
          <button
            className="practice_button"
            onClick={() => {
              recoverState();
              skipAnswer();
            }}
          >
            Пропустить
          </button>

          <button
            className={`practice_button ${
              isNextDisabled ? "disabled" : "enabled"
            }`}
            onClick={
              () => {
                checkAnswer(inputValue);
                // this.setState({ inputValue: `` });
              }
              // checkAnswer(variants[this.state.activeRadio].isAnswerRight);
              // this.setState({ activeRadio: -1 });

              // checkAnswer(this.state(inputValue));
              // this.setState({ inputValue: `` });
            }
          >
            Продолжить
          </button>
        </article>
      </div>
    </section>
  );
};

export default PracticeButtons;
