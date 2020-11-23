import React, { useState } from "react";

import PracticeTitle from "./PracticeTitle";
import TextareaComponent from "../TextareaComponent";
import RadioComponent from "../RadioComponent";
import PracticeButtons from "./PracticeButtons";

export default function PracticeContent({
  actualTask,
  checkAnswer,
  skipAnswer,
  variants,
  topic,
  coordinates,
  sides,
}) {
  const [activeRadio, setActiveRadio] = useState(-1);

  return (
    <>
      <section className="practice_content__wrapper">
        <h1 className="practice_content__title">Выберите правильный ответ</h1>
        <div className="practice_content">
          <PracticeTitle
            actualTask={actualTask}
            topic={topic}
            coordinates={coordinates}
            sides={sides}
          />

          <article className="practice_content__input_wrapper">
            <RadioComponent
              checkAnswer={() => {
                if (activeRadio !== -1 && variants) {
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
      </section>

      <PracticeButtons
        checkAnswer={checkAnswer}
        setActiveRadio={(i) => setActiveRadio(i)}
        skipAnswer={skipAnswer}
        isNextDisabled={activeRadio === -1}
        answer={variants[activeRadio] && variants[activeRadio].isAnswerRight}
      />
    </>
  );
}
