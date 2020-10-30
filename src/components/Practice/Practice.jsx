import React from "react";
import PropTypes from "prop-types";

class Practice extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      actualTask: ``,
      rightAnswer: 0,
      maxTasks: 10,
      progress: 0,
      inputValue: ``,
      nextDisabled: true,
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

  checkAnswer() {
    if (parseInt(this.state.inputValue) === this.state.rightAnswer) {
      if (this.state.progress + 20 >= 100) {
        // Finishing. Report
        this.setState({
          progress: this.state.progress + 10,
        });
        setTimeout(() => this.props.changePage(0), 1500);
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
      inputValue: ``,
      actualTask: this.createTaskSum(),
      nextDisabled: true,
    });
  }

  componentDidMount() {
    this.setState({ actualTask: this.createTaskSum() });
  }

  render() {
    const { changePage } = this.props;

    return (
      <section className="practice_block">
        <section className="progress_wrapper">
          <div className="progress_bar">
            <div className="progress_inner">
              <button className="progress_close" onClick={() => changePage(0)}>
                X
              </button>
              <div className="progress_line">
                <div
                  className="progress_fill"
                  style={{ width: this.state.progress + "%" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section className="practice_content__wrapper">
          <h1 className="practice_content__title">Напишите результат суммы</h1>
          <div className="practice_content">
            <div className="practice_content__block">
              <div className="practice_content__teacher">
                <img src="./img/teacher.svg" alt="" />
              </div>
              <div className="practice_content__task">
                <span className="practice_content__inner">
                  {this.state.actualTask}
                </span>
                <div className="practice_content__triangle_wrapper">
                  <span className="practice_content__triangle"></span>
                </div>
              </div>
            </div>

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
                    if (e.target.value.length > 0) this.checkAnswer();
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
              {/* <div> */}
              <button
                className="practice_button"
                onClick={() => this.skipAnswer()}
              >
                Пропустить
              </button>

              <button
                className={`practice_button ${
                  this.state.nextDisabled ? "disabled" : "enabled"
                }`}
                onClick={() => this.checkAnswer()}
              >
                Продолжить
              </button>
            </article>
          </div>
        </section>
      </section>
    );
  }
}

Practice.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Practice;
