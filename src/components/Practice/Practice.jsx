import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import PracticeContent from "../PracticeContent/PracticeContent.jsx";
import { Link } from "react-router-dom";
import { LESSONS_DATA } from "../../const";
import { create, all } from "mathjs";

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

  createFractionsExpression(type, elems) {
    const nums = this.createRandomArray(elems).sort((a, b) => a - b);
    let fractions = [];
    let fractionsDivides = [];
    for (let i = 0; i < nums.length / 2; i++) {
      fractionsDivides.push(nums[i] / nums[nums.length - i - 1]);
      fractions.push(`\\frac{${nums[i]}}{${nums[nums.length - i - 1]}}`);
    }

    let answer = fractionsDivides.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    let expression = fractions
      .map((item, i, arr) => {
        if (i !== arr.length - 1) {
          return item + " " + type.sign;
        } else {
          return item;
        }
      })
      .join(" ");

    return {
      answer: math.fraction(answer),
      expression,
    };
  }

  createExpression(type, elems) {
    let expression;
    let expressionType = LESSONS_DATA.find((item) => item.type === type);

    if (type === "fractions") {
      return this.createFractionsExpression(expressionType, elems * 2);
    }

    let nums = this.createRandomArray();
    if (elems > 2) {
      nums = nums.concat(this.createRandomArray(elems - 2));
    }

    expression = nums
      .map((item, i, arr) => {
        if (i !== arr.length - 1) {
          return item + " " + expressionType.sign;
        } else {
          return item;
        }
      })
      .join(" ");

    // expression = expression.join(" ");

    return { answer: math.evaluate(expression), expression };
  }

  createTask(type, level = 2) {
    const { answer, expression } = this.createExpression(type, level);
    let variants;

    const checkInt = (n, d) => {
      n = Math.round(n);
      d = Math.round(d);
      if (Math.trunc(n / d)) {
        return ((n / d) ^ 0) === n / d
          ? Math.trunc(n / d)
          : `${Math.trunc(n / d)}\\frac{${n - d}}{${d}}`;
        // return `${Math.trunc(n / d)}\\frac{${Math.floor(n - d)}}{${Math.floor(
        //   d
        // )}}`;
      } else {
        return `\\frac{${n}}{${d}}`;
      }
    };

    if (type === "fractions") {
      const { n, d } = math.fraction(answer);
      console.log("ewrfewf", n, d);
      variants = [
        {
          tex: checkInt(n, d),
          isAnswerRight: true,
        },
        {
          tex: checkInt(n * 0.4, d * 0.8),
          isAnswerRight: false,
        },
        {
          tex: checkInt(n * 0.8, d * 0.4),
          isAnswerRight: false,
        },
        {
          tex: checkInt(n * 0.6, d * 0.6),
          isAnswerRight: false,
        },
      ];
    } else {
      variants = [
        {
          tex: answer,
          isAnswerRight: true,
        },
        {
          tex: math.evaluate(answer + answer * 0.2),
          isAnswerRight: false,
        },
        {
          tex: math.evaluate(answer - answer * 0.2),
          isAnswerRight: false,
        },
        {
          tex: math.evaluate(answer + answer * 0.4),
          isAnswerRight: false,
        },
      ];
    }

    this.setState({ variants });

    console.log(expression);
    return expression;
  }

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
          variants: [],
        });
        this.skipAnswer();
      }
    } else {
      this.setState({
        variants: [],
      });
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
