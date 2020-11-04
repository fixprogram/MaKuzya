import React from "react";
import PropTypes from "prop-types";
import MathJax from "react-mathjax";

export default class RadioComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeRadio: -1,
    };
  }

  checkKeyDown(e) {
    switch (e.key) {
      case "Enter":
        if (this.state.activeRadio !== -1 && this.props.variants) {
          this.props.checkAnswer(
            this.props.variants[this.state.activeRadio].isAnswerRight
          );
          this.setState({ activeRadio: -1 });
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
      case "4":
        this.setState({ activeRadio: 3 });
        break;
    }
  }

  render() {
    const { variants, checkDisabled } = this.props;

    document.addEventListener("keydown", (e) => {
      this.checkKeyDown(e);
    });

    console.log("variants:  ", variants);

    return variants.map((it, i) => {
      return (
        <fieldset key={i}>
          <label
            htmlFor={i}
            className={`practice_radio-label ${
              this.state.activeRadio === i ? "practice_radio-label_checked" : ""
            } `}
          >
            <input
              type="radio"
              className="visually-hidden"
              id={i}
              onClick={() => {
                checkDisabled(false);
                this.setState({ activeRadio: i });
              }}
            />
            <MathJax.Provider>
              <MathJax.Node formula={it.tex} />
            </MathJax.Provider>
          </label>
        </fieldset>
      );
    });
  }
}

RadioComponent.propTypes = {
  variants: PropTypes.array.isRequired,
  checkDisabled: PropTypes.func.isRequired,
  checkAnswer: PropTypes.func.isRequired,
};
