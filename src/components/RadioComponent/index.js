import React, { useEffect } from "react";
import MathJax from "react-mathjax";
import { roundTo } from "../../misc/utils";

export default function RadioComponent({
  activeRadio,
  variants,
  checkAnswer,
  setActiveRadio,
  type,
}) {
  function checkKeyDown(e) {
    switch (e.key) {
      case "Enter":
        checkAnswer();
        break;
      case "1":
        setActiveRadio(0);
        break;
      case "2":
        setActiveRadio(1);
        break;
      case "3":
        setActiveRadio(2);
        break;
      case "4":
        setActiveRadio(3);
        break;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", checkKeyDown);

    return () => {
      window.removeEventListener("keydown", checkKeyDown);
    };
  }, [checkKeyDown, activeRadio]);

  const { first, second } = variants;

  return first.map((it, i) => {
    let formula = "";

    switch (type) {
      case "equation":
        formula = `x = ${it}`;
        break;
      case "inequality":
        formula = `x < ${it}`;
        break;
      case "quadratic-equation":
        if (second.length > 1) {
          formula = `x_1 = ${it}; x_2 = ${second[i]}`;
        } else {
          formula = `x = ${it}`;
        }
        break;
      default:
        if (type.split("-")[0] === "fractions") {
          formula = it;
        } else {
          formula = roundTo(it);
        }
        break;
    }
    return (
      <fieldset
        key={i}
        className={`practice_radio ${
          activeRadio === i ? "practice_radio_checked" : ""
        } `}
        onClick={() => {
          setActiveRadio(i);
        }}
      >
        <label htmlFor={i}>
          {/* <div className="practice_radio-label_inner"> */}
          <input type="radio" className="visually-hidden" id={i} />
          <MathJax.Provider>
            <MathJax.Node formula={formula} />
          </MathJax.Provider>
          <span className="radio__number">{i + 1}</span>
          {/* </div> */}
        </label>
      </fieldset>
    );
  });
}
