import React, { useState, useEffect } from "react";

import CellField from "../CellField";
import PracticeTitle from "./PracticeTitle";
import TextareaComponent from "../TextareaComponent";
import RadioComponent from "../RadioComponent";
import PracticeButtons from "./PracticeButtons";
import { connect } from "react-redux";
import { Animation } from "rsuite";
import { actionCreator } from "../../actions";
import { useParams } from "react-router-dom";
import CanvasComponent from "../CanvasComponent";

const { Slide, Transition } = Animation;

function PracticeContent({
  checkAnswer,
  skipAnswer,
  variants,
  practicePopupMessage,
  practiceProgress,
  isSkipping,
  charts,
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

  return (
    <>
      <section
        className={`practice_content__wrapper ${
          variants.second.length > 1 ? "wide-radio" : ""
        }`}
      >
        <h1 className="practice_content__title">Choose right answer</h1>
        <Slide in={show} placement={placement}>
          {/* {(props, ref) => <Panel {...props} ref={ref} />} */}
          <div className="practice_content">
            {type === "pifagor" ? (
              <CanvasComponent />
            ) : (
              <>
                <PracticeTitle />
                <article className="practice_content__input_wrapper">
                  <RadioComponent
                    checkAnswer={() => {
                      if (activeRadio !== -1 && variants.first) {
                        animateAndContinue(() => {
                          checkAnswer(
                            variants.second.length > 1
                              ? [
                                  variants.first[activeRadio],
                                  variants.second[activeRadio],
                                ]
                              : variants.first[activeRadio]
                          );
                        });
                      }
                    }}
                    variants={variants}
                    activeRadio={activeRadio}
                    setActiveRadio={(i) => setActiveRadio(i)}
                    type={type}
                  />
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
              variants.second.length > 1
                ? [variants.first[activeRadio], variants.second[activeRadio]]
                : variants.first[activeRadio]
            )
          )
        }
        setActiveRadio={(i) => setActiveRadio(i)}
        skipAnswer={() => animateAndContinue(skipAnswer)}
        isNextDisabled={activeRadio === -1}
        answer={
          variants.first[activeRadio] &&
          variants.first[activeRadio].isAnswerRight
        }
        disabled={disabled}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  variants: state.variants,
  practicePopupMessage: state.practicePopupMessage,
  practiceProgress: state.practiceProgress,
  isSkipping: state.isSkipping,
  charts: state.charts,
});

export default connect(mapStateToProps)(PracticeContent);
