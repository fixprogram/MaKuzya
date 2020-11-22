import React, { useEffect } from "react";
import MathJax from "react-mathjax";

export default function RadioComponent({
  activeRadio,
  variants,
  checkAnswer,
  setActiveRadio,
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
            onClick={() => {
              setActiveRadio(i);
            }}
          />
          <MathJax.Provider>
            <MathJax.Node formula={it.tex} />
          </MathJax.Provider>
          <span className="radio__number">{i + 1}</span>
        </label>
      </fieldset>
    );
  });
}
