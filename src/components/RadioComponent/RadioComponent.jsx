import React from "react";
import PropTypes from "prop-types";
import MathJax from "react-mathjax";

export default class RadioComponent extends React.Component {
  render() {
    const { variants, checkDisabled, checkRadio, activeRadio } = this.props;

    return variants.map((it, i) => {
      return (
        <fieldset key={i}>
          <label
            htmlFor={i}
            className={`practice_radio-label ${
              activeRadio === i ? "practice_radio-label_checked" : ""
            } `}
          >
            <input
              type="radio"
              className="visually-hidden"
              id={i}
              onClick={(e) => {
                checkDisabled(false);
                checkRadio(i);
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
