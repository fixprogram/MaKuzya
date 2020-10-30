import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import PracticeContent from "../PracticeContent/PracticeContent.jsx";
import { Link } from "react-router-dom";

class Practice extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      actualTask: ``,
      rightAnswer: 0,
      maxTasks: 10,
      progress: 0,
    };
  }

  randomInteger(level = 1) {
    return Math.floor(1 * level + Math.random() * (10 * level + 1 - 1 * level));
  }

  createTaskSum() {
    const firstNum = this.randomInteger();
    const secondNum = this.randomInteger();
    this.setState({ rightAnswer: firstNum + secondNum });
    return firstNum + " + " + secondNum;
  }

  checkAnswer(value) {
    if (parseInt(value) === this.state.rightAnswer) {
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
      actualTask: this.createTaskSum(),
    });
  }

  componentDidMount() {
    this.setState({ actualTask: this.createTaskSum() });
  }

  render() {
    return (
      <section className="practice_block">
        <ProgressBar progress={this.state.progress}>
          <Link className="progress_close" to="/">
            X
          </Link>
        </ProgressBar>

        <PracticeContent
          actualTask={this.state.actualTask}
          checkAnswer={(value) => this.checkAnswer(value)}
          skipAnswer={() => this.skipAnswer()}
        />
      </section>
    );
  }
}

Practice.propTypes = {};

export default Practice;
