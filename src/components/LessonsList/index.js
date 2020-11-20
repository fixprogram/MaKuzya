import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LessonItem from "../LessonItem";

function LessonsList({ lessons }) {
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

const mapStateToProps = (state) => ({
  lessons: state.lessons,
});

export default connect(mapStateToProps)(LessonsList);
