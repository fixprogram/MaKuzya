import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProgressBar from "../ProgressBar";
import PracticeContent from "../PracticeContent";
import { shuffleArray } from "../../misc/utils";
import { useForceUpdate } from "../../misc/custom-hooks";
import createTask from "./createTask";

const MAX_TASKS = 10;

export default function Practice() {
  const { type } = useParams();
  const forceUpdate = useForceUpdate();
  const [progress, setProgress] = useState(0);

  const { variants, expression } = createTask(type);

  function checkAnswer(value) {
    console.log("VALUE:   ", value);
    if (value) {
      if (progress + 20 >= MAX_TASKS * 10) {
        // Finishing. Report
        setProgress(progress + 20);
        setTimeout(() => window.location.replace("/"), 1500);
      } else {
        setProgress(progress + 20);
      }
    } else {
      setProgress(progress - 10);
    }
  }

  return (
    <section className="practice_block">
      <ProgressBar progress={progress}>
        <Link className="progress_close" to="/"></Link>
      </ProgressBar>

      <PracticeContent
        actualTask={expression}
        checkAnswer={(value) => checkAnswer(value)}
        skipAnswer={() => forceUpdate()}
        variants={shuffleArray(variants)}
      />
    </section>
  );
}
