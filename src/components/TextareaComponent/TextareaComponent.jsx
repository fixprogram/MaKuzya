import React from "react";
import PropTypes from "prop-types";

export default class TextareaComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ``,
    };
  }
  render() {
    const { checkAnswer, checkDisabled } = this.props;
    return (
      <textarea
        className="practice_content__textarea"
        value={this.state.inputValue}
        onChange={(e) => {
          this.setState({
            inputValue: e.target.value,
          });
          e.target.value.length > 0
            ? checkDisabled(false)
            : checkDisabled(true);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (e.target.value.length > 0) this.setState({ inputValue: `` });
            checkAnswer(this.state.inputValue);
          }
        }}
        placeholder="Напишите результат суммы"
      ></textarea>
    );
  }
}

TextareaComponent.propTypes = {
  checkAnswer: PropTypes.func.isRequired,
  checkDisabled: PropTypes.func.isRequired,
};
