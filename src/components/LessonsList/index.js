import React, { Fragment } from "react";
import { connect } from "react-redux";

import LessonItem from "../LessonItem";
import { actionCreatorUser } from "../../actions";
import ProgressData from "../ProgressData";

function LessonsList({ user, setChapter, lessons, chapter }) {
  const { progress, activeSubject } = user;
  const progressLesson = progress[`${activeSubject.toLowerCase()}`][chapter]; // Name of the subject -> number of block of lessons
  const actualLessons = lessons.filter((it) => it.chapter === chapter);

  let actualWidth = 100;

  const widths = lessons.map((lesson, i) => {
    // if (actualWidth === 100 && i % 4) {
    //   actualWidth = 50;
    //   return "50%";
    // }

    if (actualWidth === 100 && i % 2) {
      return "100%";
    }

    if (actualWidth === 50 && i % 3) {
      actualWidth = 100;
      return "100%";
    }

    actualWidth = 50;
    return "50%";
  });

  return (
    <section className="main_block">
      <div className="lessons_list">
        {lessons.map((it, i) => {
          {
            if (lessons[i - 1]) {
              if (lessons[i].chapter !== lessons[i - 1].chapter) {
                return (
                  <Fragment key={`${i + " " + chapter}`}>
                    <hr style={{ width: "100%" }} />
                    <div
                      className="lesson_wrapper"
                      id="lesson_wrapper"
                      style={{ width: widths[i] }}
                    >
                      <LessonItem
                        id={it.id}
                        title={it.title}
                        progress={progressLesson[i]}
                      />
                    </div>
                  </Fragment>
                );
              } else {
                return (
                  <div
                    className="lesson_wrapper"
                    key={`${i + " " + chapter}`}
                    id="lesson_wrapper"
                    style={{ width: widths[i] }}
                  >
                    <LessonItem
                      id={it.id}
                      title={it.title}
                      progress={progressLesson[i]}
                    />
                  </div>
                );
              }
            }
          }
        })}

        {/* <div className="practice_link__wrapper">
          <Link
            className="practice_link"
            to={`practice/${lessons[lessons.length - 1].id}`}
          >
            <img src="./img/dumbbell.svg" alt="" />
          </Link>
        </div> */}
      </div>
      <ProgressData />
    </section>
  );
}

const mapStateToProps = (state) => ({
  lessons: state.lessons.lessons,
  user: state.user,
  chapter: state.user.chapter,
});

const mapDispatchToProps = (dispatch) => ({
  setChapter: (chapter) => dispatch(actionCreatorUser.setChapter(chapter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonsList);
