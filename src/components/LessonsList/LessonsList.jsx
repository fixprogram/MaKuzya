import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LessonItem from "../LessonItem/LessonItem.jsx";

export default function LessonsList(props) {
  const { lessons } = props;

  return (
    <section className="main_block">
      <div className="lessons_list">
        {lessons.map((it, i) => {
          return (
            <div className="lesson_wrapper" key={i}>
              <LessonItem
                level={it.level}
                id={it.id}
                icon={it.icon}
                title={it.title}
              />
            </div>
          );
        })}

        <div className="practice_link__wrapper">
          <Link
            className="practice_link"
            to={`practice/${lessons[lessons.length - 1].id}`}
          >
            <img src="./img/dumbbell.svg" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

LessonsList.propTypes = {
  lessons: PropTypes.array.isRequired,
};
