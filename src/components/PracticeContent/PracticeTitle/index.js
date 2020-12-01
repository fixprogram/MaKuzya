import React from "react";
import MathJax from "react-mathjax";
import { connect } from "react-redux";
import CanvasComponent from "../../CanvasComponent";
import CellField from "../../CellField";

const PracticeTitle = ({ currentTask, topic, title }) => {
  // const beautify = () => {
  //   const arr = currentTask.split(" ");
  //   const idxDivision = arr.indexOf("/");
  //   const idxEqual = arr.indexOf("=");
  //   const idxOther = arr.indexOf("<");
  //   if (idxDivision) arr[idxDivision] = " : ";
  //   if (idxEqual === -1 && idxOther === -1) arr.push(" = ?");
  //   currentTask = arr.join(" ");
  // };
  // if (currentTask) {
  //   beautify();
  // }
  return (
    <>
      <h1 className="practice_content__title">{title}</h1>
      {/* <div className="practice_content__block">
        {topic === "charts" ? (
          <CellField />
        ) : currentTask !== null ? (
          <>
            <div className="practice_content__teacher">
              <img src="../img/cat-icons/thinking.svg" alt="MaKuzya" />
            </div>
            <div className="practice_content__task">
              <span className="practice_content__inner">
                <MathJax.Provider>
                  <MathJax.Node formula={currentTask} />
                </MathJax.Provider>
              </span>
              <div className="practice_content__triangle_wrapper">
                <span className="practice_content__triangle"></span>
              </div>
            </div>
          </>
          <></>
        ) : (
          <></>
        )}
      </div> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentTask: state.practice.currentTask.expression.tex,
});

export default connect(mapStateToProps)(PracticeTitle);
