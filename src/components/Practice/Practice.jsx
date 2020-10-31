import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import PracticeContent from "../PracticeContent/PracticeContent.jsx";
import { Link } from "react-router-dom";
import { LESSON_TYPES } from "../../const";
import { create, all } from "mathjs";
import MathJax from "react-mathjax";

const config = {};
const math = create(all, config);

class Practice extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      actualTask: ``,
      rightAnswer: 0,
      maxTasks: 10,
      progress: 0,
      variants: [],
    };

    this.type = this.props.type;
  }

  randomInteger(level = 1) {
    return Math.floor(1 * level + Math.random() * (9 * level + 1 - 1 * level));
  }

  createTask(type) {
    console.log(type);
    let firstNum = this.randomInteger();
    let secondNum = this.randomInteger();
    let thirdNum = this.randomInteger();
    let fourthNum = this.randomInteger();
    switch (type) {
      case LESSON_TYPES.SUMMATION:
        this.setState({ rightAnswer: firstNum + secondNum });
        return firstNum + " + " + secondNum;
      case LESSON_TYPES.MINUS:
        this.setState({ rightAnswer: firstNum - secondNum });
        return firstNum + " - " + secondNum;
      case LESSON_TYPES.MULTIPLICATION:
        this.setState({ rightAnswer: firstNum * secondNum });
        return firstNum + " * " + secondNum;
      case LESSON_TYPES.DIVISION:
        firstNum = secondNum * this.randomInteger();
        this.setState({ rightAnswer: firstNum / secondNum });
        return firstNum + " / " + secondNum;

      case LESSON_TYPES.FRACTIONS_SUMMATION:
        const tex = `\\frac${firstNum}${secondNum}
          +\\frac${thirdNum}${fourthNum}`;
        const rightAnswer = firstNum / secondNum + thirdNum / fourthNum;
        const denominator =
          secondNum !== fourthNum ? secondNum * fourthNum : fourthNum;
        this.setState({
          rightAnswer,
          variants: [
            {
              tex: `\\frac{${secondNum}}{${thirdNum}}`,
              isAnswerRight: false,
            },
            {
              tex: `\\frac{${Math.floor(
                rightAnswer * denominator
              )}}{${denominator}}`,
              isAnswerRight: true,
            },
            {
              tex: `\\frac{${firstNum}}{${denominator}}`,
              isAnswerRight: false,
            },
          ],
        });
        console.log(this.state.rightAnswer);
        return (
          <MathJax.Provider>
            <MathJax.Node formula={tex} />
          </MathJax.Provider>
        );
    }
  }

  checkAnswer(value) {
    if (parseInt(value) === this.state.rightAnswer || value === true) {
      if (this.state.progress + 20 >= 100) {
        // Finishing. Report
        this.setState({
          progress: this.state.progress + 20,
        });
        setTimeout(() => window.location.replace("/"), 1500);
      } else {
        this.setState({
          progress: this.state.progress + 20,
        });
        this.skipAnswer();
      }
    } else {
      this.skipAnswer();
    }
  }

  skipAnswer() {
    this.setState({
      actualTask: this.createTask(this.type),
    });
  }

  componentDidMount() {
    this.setState({ actualTask: this.createTask(this.type) });
  }

  render() {
    return (
      <section className="practice_block">
        <ProgressBar progress={this.state.progress}>
          <Link className="progress_close" to="/"></Link>
        </ProgressBar>

        <PracticeContent
          actualTask={this.state.actualTask}
          checkAnswer={(value) => this.checkAnswer(value)}
          skipAnswer={() => this.skipAnswer()}
          checkboxes={
            this.type === LESSON_TYPES.FRACTIONS_SUMMATION ? true : false
          }
          variants={
            this.type === LESSON_TYPES.FRACTIONS_SUMMATION
              ? this.state.variants
              : []
          }
        />
      </section>
    );
  }
}

Practice.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Practice;
