import React from "react";
import { Link } from "react-router-dom";

import DynamicProgress from "../DynamicProgress";

export default function LessonItem({ level = 0, id, title, progress }) {
  return (
    <div className={`lesson lesson-level-${level}`}>
      <Link className="lesson_inner" to={`practice/${id}`}>
        <DynamicProgress progress={progress} />
        <span className="lesson_title">{title}</span>
        {/* <span className="lesson_difficulty">
          <img
            src="./img/crown.svg"
            className="active"
            alt="crown"
            width="20"
          />
          <img src="./img/crown.svg" className="" alt="crown" width="20" />
          <img src="./img/crown.svg" className="" alt="crown" width="20" />
        </span> */}
      </Link>
    </div>
  );
}
