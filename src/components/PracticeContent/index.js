import React, { useState, useCallback, useEffect } from "react";

import PracticeTitle from "./PracticeTitle";
import TextareaComponent from "../TextareaComponent";
import RadioComponent from "../RadioComponent";
import PracticeButtons from "./PracticeButtons";
import { connect } from "react-redux";
import { Animation } from "rsuite";
import { actionCreator } from "../../actions";
import { useParams } from "react-router-dom";
import CellField from "../CellField";

const { Slide, Transition } = Animation;

function PracticeContent({
  checkAnswer,
  skipAnswer,
  variants,
  animationCount,
  increaseAnimationCount,
  practicePopupMessage,
}) {
  const { type } = useParams();
  const [activeRadio, setActiveRadio] = useState(-1);
  // const [value, setValue] = useState(null)
  const [placement, setPlacement] = useState("right");
  const [show, setShow] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (animationCount > 0) {
      setTimeout(() => {
        setShowPopup(!showPopup);
      }, 500);
      setTimeout(() => {
        setPlacement("right");
        setShow(!show);
      }, 750);
      setTimeout(() => {
        setDisabled(false);
      }, 1750);
    }
    increaseAnimationCount();
  }, [skipAnswer, checkAnswer]);

  return (
    <>
      <section className="practice_content__wrapper">
        <h1 className="practice_content__title">Choose right answer</h1>
        <Slide in={show} placement={placement}>
          {/* {(props, ref) => <Panel {...props} ref={ref} />} */}
          <div className="practice_content">
            {type === "charts" ? (
              <CellField />
            ) : (
              <>
                <PracticeTitle />
                <article className="practice_content__input_wrapper">
                  <RadioComponent
                    checkAnswer={() => {
                      if (activeRadio !== -1 && variants) {
                        setPlacement("left");
                        setShow(!show);
                        setShowPopup(!showPopup);
                        checkAnswer(variants[activeRadio]);
                        setActiveRadio(-1);
                      }
                    }}
                    variants={variants}
                    // setValue={setValue}
                    activeRadio={activeRadio}
                    setActiveRadio={(i) => setActiveRadio(i)}
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
          <div className="practice_content">
            <h3>{practicePopupMessage}</h3>
          </div>
        </Transition>
      </section>

      <PracticeButtons
        checkAnswer={() => {
          setPlacement("left");
          setShow(!show);
          setDisabled(animationCount !== 0 && true);
          setShowPopup(!showPopup);
          checkAnswer(variants[activeRadio]);
        }}
        setActiveRadio={(i) => setActiveRadio(i)}
        skipAnswer={() => {
          setPlacement("left");
          setDisabled(animationCount !== 0 && true);
          setShow(!show);
          setShowPopup(!showPopup);

          skipAnswer();
        }}
        isNextDisabled={activeRadio === -1}
        answer={variants[activeRadio] && variants[activeRadio].isAnswerRight}
        disabled={disabled}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  variants: state.variants,
  animationCount: state.animationCount,
  practicePopupMessage: state.practicePopupMessage,
});

const mapDispatchToProps = (dispatch) => ({
  increaseAnimationCount: () =>
    dispatch(actionCreator.increaseAnimationCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PracticeContent);
