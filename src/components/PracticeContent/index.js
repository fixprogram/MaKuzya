import React, { useState, useCallback, useEffect } from "react";

import PracticeTitle from "./PracticeTitle";
import TextareaComponent from "../TextareaComponent";
import RadioComponent from "../RadioComponent";
import PracticeButtons from "./PracticeButtons";
import { connect } from "react-redux";
import { Animation } from "rsuite";
import { actionCreator } from "../../actions";

const { Slide } = Animation;

function PracticeContent({
  checkAnswer,
  skipAnswer,
  variants,
  animationCount,
  increaseAnimationCount,
}) {
  const [activeRadio, setActiveRadio] = useState(-1);
  const [placement, setPlacement] = useState("right");
  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (animationCount > 0) {
      setTimeout(() => {
        setPlacement("right");
        setShow(!show);
        setDisabled(false);
      }, 500);
    }
    increaseAnimationCount();
  }, [skipAnswer, checkAnswer]);

  return (
    <>
      <section className="practice_content__wrapper">
        <h1 className="practice_content__title">Выберите правильный ответ</h1>
        <Slide in={show} placement={placement}>
          {/* {(props, ref) => <Panel {...props} ref={ref} />} */}
          <div className="practice_content">
            <PracticeTitle />

            <article className="practice_content__input_wrapper">
              <RadioComponent
                checkAnswer={() => {
                  if (activeRadio !== -1 && variants) {
                    setPlacement("left");
                    setShow(!show);
                    checkAnswer(variants[activeRadio].isAnswerRight);
                    setActiveRadio(-1);
                  }
                }}
                variants={variants}
                activeRadio={activeRadio}
                setActiveRadio={(i) => setActiveRadio(i)}
              />
            </article>
          </div>
        </Slide>
      </section>

      <PracticeButtons
        checkAnswer={() => {
          setPlacement("left");
          setShow(!show);
          setDisabled(animationCount !== 0 && true);
          checkAnswer();
        }}
        setActiveRadio={(i) => setActiveRadio(i)}
        skipAnswer={() => {
          setPlacement("left");
          setShow(!show);
          setDisabled(animationCount !== 0 && true);

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
});

const mapDispatchToProps = (dispatch) => ({
  increaseAnimationCount: () =>
    dispatch(actionCreator.increaseAnimationCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PracticeContent);
