import React, { useState, useEffect } from "react";

import CellField from "../CellField";
import PracticeTitle from "./PracticeTitle";
import TextareaComponent from "../TextareaComponent";
import RadioComponent from "../RadioComponent";
import PracticeButtons from "./PracticeButtons";
import { connect } from "react-redux";
import { Animation } from "rsuite";
import { useParams } from "react-router-dom";
import CanvasComponent from "../CanvasComponent";
import { actionCreatorPractice } from "../../actions";
import InputComponent from "../InputComponent";
import MathJax from "react-mathjax";

const { Slide, Transition } = Animation;

function PracticeContent({
  checkAnswer,
  variants,
  practicePopupMessage,
  practiceProgress,
  isSkipping,
  setIsSkipping,
  expressionTitle,
  wayToResolve,
  currentTask,
}) {
  const { type } = useParams();
  const [activeRadio, setActiveRadio] = useState(-1);
  const [placement, setPlacement] = useState("right");
  const [show, setShow] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setShow(true);
    setShowPopup(false);
    setPlacement("right");
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  }, [practiceProgress, isSkipping]);

  const animateAndContinue = (continueFun) => {
    setPlacement("left");
    setDisabled(true);
    setShow(!show);
    setShowPopup(!showPopup);
    setActiveRadio(-1);

    setTimeout(() => {
      continueFun();
    }, 500);
  };

  const beautify = () => {
    const arr = currentTask.split(" ");
    const idxDivision = arr.indexOf("/");
    const idxEqual = arr.indexOf("=");
    const idxOther = arr.indexOf("<");
    if (idxDivision) arr[idxDivision] = " : ";
    if (idxEqual === -1 && idxOther === -1) arr.push(" = ?");
    currentTask = arr.join(" ");
  };
  if (currentTask) {
    beautify();
  }

  return (
    <>
      <section
        className={`practice_content__wrapper ${
          variants.length > 1 ? "wide-radio" : ""
        }`}
      >
        <Slide in={show} placement={placement}>
          <div className="practice_content">
            {type === "pifagor" ? (
              <CanvasComponent />
            ) : (
              <>
                <PracticeTitle topic={type} title={expressionTitle} />
                <article className="practice_content__input_wrapper">
                  <>
                    <div className="practice_content__teacher">
                      <img src="../img/cat-icons/thinking.svg" alt="MaKuzya" />
                    </div>
                    <div className="practice_content__task">
                      <span className="practice_content__inner">
                        <MathJax.Provider>
                          <MathJax.Node formula={currentTask} />
                        </MathJax.Provider>
                        {wayToResolve === "input" ? (
                          <InputComponent
                            checkAnswer={(answ) =>
                              animateAndContinue(() => checkAnswer(answ))
                            }
                            type={type}
                          />
                        ) : (
                          <RadioComponent
                            checkAnswer={() => {
                              if (activeRadio !== -1 && variants[0]) {
                                animateAndContinue(() => {
                                  checkAnswer(
                                    variants.length > 1
                                      ? [
                                          variants[0][activeRadio],
                                          variants[1][activeRadio],
                                        ]
                                      : variants[0][activeRadio]
                                  );
                                });
                              }
                            }}
                            variants={variants}
                            activeRadio={activeRadio}
                            setActiveRadio={(i) => setActiveRadio(i)}
                            type={type}
                          />
                        )}
                      </span>
                      <div className="practice_content__triangle_wrapper">
                        <span className="practice_content__triangle"></span>
                      </div>
                    </div>
                  </>
                </article>
              </>
            )}
          </div>
        </Slide>
        <Transition
          in={showPopup}
          exitedClassName="custom-exited"
          exitingClassName="custom-exiting"
          enteredClassName="custom-entered"
          enteringClassName="custom-entering"
        >
          <div className="practice_content practice_content__popup">
            <div
              className={`rs-progress rs-progress-circle rs-progress-circle-${practicePopupMessage.toLowerCase()}`}
            >
              <span className="rs-progress-circle-info">
                <span
                  className={`rs-progress-icon-${practicePopupMessage.toLowerCase()}`}
                ></span>
              </span>
              <svg className="rs-progress-svg" viewBox="0 0 100 100">
                <path
                  className="rs-progress-trail"
                  d="M 50,50 m 0,-47
     a 47,47 0 1 1 0,94
     a 47,47 0 1 1 0,-94"
                  strokeWidth="6"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "295.31px, 295.31px",
                    strokeDashoffset: "0px",
                  }}
                ></path>
                <path
                  d="M 50,50 m 0,-47
     a 47,47 0 1 1 0,94
     a 47,47 0 1 1 0,-94"
                  strokeLinecap="round"
                  className="rs-progress-stroke"
                  strokeWidth="6"
                  fillOpacity="0"
                  style={{
                    stroke: "rgb(28, 176, 246)",
                    strokeDasharray: "767.805px, 295.31px",
                    strokeDashoffset: "0px",
                  }}
                ></path>
              </svg>
            </div>

            <h3>{practicePopupMessage}</h3>
          </div>
        </Transition>
      </section>

      <PracticeButtons
        checkAnswer={() =>
          animateAndContinue(() =>
            checkAnswer(
              variants.length > 1
                ? [variants[0][activeRadio], variants[1][activeRadio]]
                : variants[0][activeRadio]
            )
          )
        }
        setActiveRadio={(i) => setActiveRadio(i)}
        skipAnswer={() => animateAndContinue(() => setIsSkipping())}
        isNextDisabled={activeRadio === -1}
        answer={
          variants[0][activeRadio] && variants[0][activeRadio].isAnswerRight
        }
        disabled={disabled}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  variants: state.practice.currentTask.variants,
  expressionTitle: state.practice.currentTask.expression.title,
  currentTask: state.practice.currentTask.expression.tex,
  wayToResolve: state.practice.currentTask.wayToResolve,
  practicePopupMessage: state.practice.practicePopupMessage,
  practiceProgress: state.practice.practiceProgress,
  isSkipping: state.practice.isSkipping,
});

const mapDispatchToProps = (dispatch) => ({
  setIsSkipping: () => dispatch(actionCreatorPractice.setIsSkipping()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PracticeContent);
