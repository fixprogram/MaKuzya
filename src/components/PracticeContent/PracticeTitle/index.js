import React from "react";
import MathJax from "react-mathjax";

export default function PracticeTitle({ actualTask }) {
  console.log("ATUAL_TASK:  ", actualTask);
  return (
    <div className="practice_content__block">
      <div className="practice_content__teacher">
        <img src="../img/teacher.svg" alt="" />
      </div>
      <div className="practice_content__task">
        <span className="practice_content__inner">
          <MathJax.Provider>
            <MathJax.Node formula={actualTask} />
          </MathJax.Provider>
        </span>
        <div className="practice_content__triangle_wrapper">
          <span className="practice_content__triangle"></span>
        </div>
      </div>
    </div>
  );
}
