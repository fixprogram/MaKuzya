import React from "react";
import PropTypes from "prop-types";
import PracticeTitle from "./PracticeTitle/PracticeTitle.jsx";
import MathJax from "react-mathjax";
import TextareaComponent from "../TextareaComponent/TextareaComponent.jsx";
import RadioComponent from "../RadioComponent/RadioComponent.jsx";

export default class PracticeContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ``,
      nextDisabled: true,
      activeRadio: -1,
    };
  }

  checkKeyDown(e) {
    switch (e.key) {
      case "Enter":
        if (this.state.activeRadio !== -1 && this.props.checkboxes) {
          this.setState({ activeRadio: -1 });
          this.props.checkAnswer(
            this.props.variants[this.state.activeRadio].isAnswerRight
          );
        }
        break;
      case "1":
        this.setState({ activeRadio: 0 });
        break;
      case "2":
        this.setState({ activeRadio: 1 });
        break;
      case "3":
        this.setState({ activeRadio: 2 });
        break;
    }
  }

  render() {
    const {
      actualTask,
      checkAnswer,
      skipAnswer,
      checkboxes,
      variants,
    } = this.props;

    return (
      <>
        <section
          className="practice_content__wrapper"
          onKeyDown={(e) => this.checkKeyDown(e)}
        >
          <h1 className="practice_content__title"></h1>
          <div className="practice_content">
            <PracticeTitle actualTask={actualTask} />

            <article className="practice_content__input_wrapper">
              {checkboxes ? (
                <RadioComponent
                  checkAnswer={checkAnswer}
                  checkDisabled={(state) =>
                    this.setState({ nextDisabled: state })
                  }
                  variants={variants}
                  activeRadio={this.state.activeRadio}
                  checkRadio={(i) => this.setState({ activeRadio: i })}
                />
              ) : (
                <TextareaComponent
                  checkAnswer={checkAnswer}
                  checkDisabled={(state) =>
                    this.setState({ nextDisabled: state })
                  }
                />
              )}
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
  checkboxes: PropTypes.bool.isRequired,
  variants: PropTypes.array.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  skipAnswer: PropTypes.func.isRequired,
};
