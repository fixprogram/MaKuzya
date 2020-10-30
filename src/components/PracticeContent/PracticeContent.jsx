import React from "react";
import PropTypes from "prop-types";
import PracticeTitle from "./PracticeTitle/PracticeTitle.jsx";

export default class PracticeContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ``,
      nextDisabled: true,
    };
  }
  render() {
    const { actualTask, checkAnswer, skipAnswer } = this.props;

    return (
      <>
        <section className="practice_content__wrapper">
          <h1 className="practice_content__title">Напишите результат суммы</h1>
          <div className="practice_content">
            <PracticeTitle actualTask={actualTask} />

            <article className="practice_content__input_wrapper">
              <textarea
                className="practice_content__textarea"
                value={this.state.inputValue}
                onChange={(e) => {
                  this.setState({
                    inputValue: e.target.value,
                  });
                  e.target.value.length > 0
                    ? this.setState({ nextDisabled: false })
                    : this.setState({ nextDisabled: true });
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (e.target.value.length > 0)
                      this.setState({ inputValue: `` });
                    checkAnswer(this.state.inputValue);
                  }
                }}
                placeholder="Напишите результат суммы"
              ></textarea>
            </article>
          </div>
        </section>

        <section className="practice_buttons_wrapper">
          <div className="practice_buttons">
            <article className="practice_buttons_inner">
              <button
                className="practice_button"
                onClick={() => {
                  this.setState({ inputValue: ``, nextDisabled: true });
                  skipAnswer();
                }}
              >
                Пропустить
              </button>

              <button
                className={`practice_button ${
                  this.state.nextDisabled ? "disabled" : "enabled"
                }`}
                onClick={() => {
                  this.setState({ inputValue: `` });
                  checkAnswer(this.state.inputValue);
                }}
              >
                Продолжить
              </button>
            </article>
          </div>
        </section>
      </>
    );
  }
}

PracticeContent.propTypes = {
  actualTask: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  skipAnswer: PropTypes.func.isRequired,
};
