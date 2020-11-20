import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LESSONS_DATA } from "../../const";
import { create, all } from "mathjs";

import ProgressBar from "../ProgressBar";
import PracticeContent from "../PracticeContent";
import { createRandomArray, shuffleArray } from "../../misc/utils";
import createTask from "./createTask";

const config = {};
const math = create(all, config);

export default function Practice() {
  const { type } = useParams();
  console.log("TYPE:  ", type);

  const state = {
    rightAnswer: 0,
    maxTasks: 10,
    progress: 0,
  };

  const { variants, expression } = createTask(type);

  function checkAnswer(value) {
    console.log(value, "   ", state.rightAnswer);
    if (parseInt(value) === state.rightAnswer || value === true) {
      if (state.progress + 20 >= 100) {
        // Finishing. Report
        setState({
          progress: state.progress + 20,
        });
        setTimeout(() => window.location.replace("/"), 1500);
      } else {
        setState({
          progress: state.progress + 20,
          variants: [],
        });
        this.skipAnswer();
      }
    } else {
      setState({
        variants: [],
      });
      skipAnswer();
    }
  }

  function skipAnswer() {
    this.setState({
      actualTask: this.createTask(type),
    });
  }

  return (
    <section className="practice_block">
      <ProgressBar progress={state.progress}>
        <Link className="progress_close" to="/"></Link>
      </ProgressBar>

      <PracticeContent
        actualTask={expression}
        checkAnswer={(value) => checkAnswer(value)}
        skipAnswer={() => skipAnswer()}
        checkboxes={true}
        variants={shuffleArray(variants)}
      />
    </section>
  );
}
