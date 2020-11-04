import React from "react";
import PropTypes from "prop-types";
import PracticeTitle from "./PracticeTitle/PracticeTitle.jsx";
import MathJax from "react-mathjax";
import TextareaComponent from "../TextareaComponent/TextareaComponent.jsx";
import RadioComponent from "../RadioComponent/RadioComponent.jsx";
import PracticeButtons from "../PracticeContent/PracticeButtons/PracticeButtons.jsx";

export default class PracticeContent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ``,
      nextDisabled: true,
      activeRadio: -1,
    };
  }

  render() {
    const { actualTask, checkAnswer, skipAnswer, variants } = this.props;

    return (
      <>
        <section className="practice_content__wrapper">
          <h1 className="practice_content__title">Выберите правильный ответ</h1>
          <div className="practice_content">
            <PracticeTitle actualTask={actualTask} />

            <article className="practice_content__input_wrapper">
              <RadioComponent
                checkAnswer={checkAnswer}
                checkDisabled={(state) =>
                  this.setState({ nextDisabled: state })
                }
                variants={variants}
                activeRadio={this.state.activeRadio}
                checkRadio={(i) => this.setState({ activeRadio: i })}
              />
            </article>
          </div>
        </section>

        <PracticeButtons
          skipAnswer={skipAnswer}
          recoverState={() =>
            this.setState({ inputValue: ``, nextDisabled: true })
          }
          isNextDisabled={this.state.nextDisabled}
        />
      </>
    );
  }
}

PracticeContent.propTypes = {
  checkboxes: PropTypes.bool,
  variants: PropTypes.array,
  checkAnswer: PropTypes.func,
  skipAnswer: PropTypes.func.isRequired,
};
