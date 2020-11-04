import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import PracticeContent from "../PracticeContent/PracticeContent.jsx";
import { Link } from "react-router-dom";
import { LESSONS_DATA } from "../../const";
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

  createRandomArray(count = 2) {
    let newArr = [];
    for (let i = 0; i < count; i++) {
      newArr.push(this.randomInteger());
    }
    return newArr;
  }

  resolveExpression(a, b, sign) {
    return a, sign, b;
  }

  createExpression(type, elems = 2) {
    let expression;
    let expressionType = LESSONS_DATA.find((item) => item.type === type);
    // console.log(expressionType);

    // console.log(type);
    let nums = this.createRandomArray();
    if (elems > 2) {
      nums = nums.concat(this.createRandomArray(elems - 2));
      console.log(nums);
      expression = nums.map((item, i, arr) => {
        if (i !== arr.length - 1) {
          return item + " " + expressionType.sign;
        } else {
          return item;
        }
      });
      return expression.join(" ");
    }

    // switch (type) {
    //   case LESSON_TYPES.find((item) => item.type === type):
    //     this.setState({ rightAnswer: firstNum + secondNum });
    //     return firstNum + " + " + secondNum;
    // case LESSON_TYPES.MINUS:
    //   this.setState({ rightAnswer: firstNum - secondNum });
    //   return firstNum + " - " + secondNum;
    // case LESSON_TYPES.MULTIPLICATION:
    //   this.setState({ rightAnswer: firstNum * secondNum });
    //   return firstNum + " * " + secondNum;
    // case LESSON_TYPES.DIVISION:
    //   firstNum = secondNum * this.randomInteger();
    //   this.setState({ rightAnswer: firstNum / secondNum });
    //   return firstNum + " / " + secondNum;

    // case LESSON_TYPES.FRACTIONS_SUMMATION:
    //   const tex = `\\frac${firstNum}${secondNum}
    //     +\\frac${thirdNum}${fourthNum}`;
    //   const rightAnswer = firstNum / secondNum + thirdNum / fourthNum;
    //   let denominator = 0;

    //   if (
    //     ((secondNum / fourthNum) ^ 0) === secondNum / fourthNum ||
    //     ((fourthNum / secondNum) ^ 0) === fourthNum / secondNum
    //   ) {
    //     ((secondNum / fourthNum) ^ 0) === secondNum / fourthNum
    //       ? (denominator = secondNum)
    //       : (denominator = fourthNum);
    //   } else {
    //     denominator = secondNum * fourthNum;
    //   }

    // this.setState({
    //   rightAnswer,
    //   variants: [
    //     {
    //       tex: `\\frac{${secondNum}}{${thirdNum}}`,
    //       isAnswerRight: false,
    //     },
    //     {
    //       tex: `\\frac{${Math.floor(
    //         rightAnswer * denominator
    //       )}}{${denominator}}`,
    //       isAnswerRight: true,
    //     },
    //     {
    //       tex: `\\frac{${firstNum}}{${denominator}}`,
    //       isAnswerRight: false,
    //     },
    //     {
    //       tex: `\\frac{${thirdNum}}{${fourthNum}}`,
    //       isAnswerRight: false,
    //     },
    //   ],
    // });
    // return (
    //   <MathJax.Provider>
    //     <MathJax.Node formula={tex} />
    //   </MathJax.Provider>
    // );
    // }
  }

  createTask() {}

  checkAnswer(value) {
    console.log(value, "   ", this.state.rightAnswer);
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
      actualTask: this.createTask("summation"),
    });
  }

  componentDidMount() {
    this.setState({ actualTask: this.createExpression(this.type, 5) });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
          checkboxes={true}
          variants={this.shuffleArray(this.state.variants)}
        />
      </section>
    );
  }
}

Practice.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Practice;
