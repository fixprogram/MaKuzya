import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProgressBar from "../ProgressBar";
import PracticeContent from "../PracticeContent";
import { shuffleArray } from "../../misc/utils";
import { useForceUpdate } from "../../misc/custom-hooks";
import createTask from "./createTask";
import { database } from "../../misc/firebase";
import { useProfile } from "../../context/profile.context";

const MAX_TASKS = 10;

export default function Practice() {
  const { type } = useParams();
  const forceUpdate = useForceUpdate();
  const [progress, setProgress] = useState(0);
  const { profile } = useProfile();

  const { variants, expression, coordinates, sides, topic } = createTask(type);

  async function checkAnswer(value) {
    if (value) {
      if (progress + 20 >= MAX_TASKS * 10) {
        // Finishing. Report
        setProgress(progress + 20);
        await database.ref(`/profiles/${profile.uid}`).set({
          ...profile,
          lingots: profile.lingots + 2,
        });
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
        coordinates={coordinates}
        sides={sides}
        checkAnswer={(value) => checkAnswer(value)}
        skipAnswer={() => forceUpdate()}
        variants={shuffleArray(variants)}
        topic={topic}
      />
    </section>
  );
}
