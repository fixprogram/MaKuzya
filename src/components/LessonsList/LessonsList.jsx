import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function LessonsList(props) {
  const { lessons } = props;

  return (
    <section className="main_block">
      <div className="lessons_list">
        {lessons.map((it, i) => {
          return (
            <div className="lesson" key={i}>
              <Link className="lesson_inner" to="sum/practice">
                <div className="lesson_symbol">
                  <svg className="lesson_symbol-border">
                    <defs>
                      <clipPath id="clip-session/ProgressRing181">
                        <path d="M3.245314017740486e-15,-53A53,53,0,1,1,-3.245314017740486e-15,53A53,53,0,1,1,3.245314017740486e-15,-53M5.15018240785769,-44.22110379859138A44.519999999999996,44.519999999999996,0,1,0,-5.15018240785769,44.22110379859138A44.519999999999996,44.519999999999996,0,1,0,5.15018240785769,-44.22110379859138Z"></path>
                      </clipPath>
                    </defs>
                    <g transform="translate(53, 53)">
                      <path
                        d="M3.245314017740486e-15,-53A53,53,0,1,1,-3.245314017740486e-15,53A53,53,0,1,1,3.245314017740486e-15,-53M-8.178191324706024e-15,-44.519999999999996A44.519999999999996,44.519999999999996,0,1,0,8.178191324706024e-15,44.519999999999996A44.519999999999996,44.519999999999996,0,1,0,-8.178191324706024e-15,-44.519999999999996Z"
                        fill="#ffd900"
                      ></path>
                      <circle
                        clipPath="url(#clip-session/ProgressRing181)"
                        cx="-4.234658604582266"
                        cy="-48.57576830583987"
                        fill="white"
                        r="7.066666666666666"
                      ></circle>
                      <path
                        d="M2.8143825854578575,-48.49370320632022A4.24,4.24,0,0,1,7.6600652465470525,-52.443525819863055A53,53,0,1,1,-4.608695652173929,-52.79924170275207A4.24,4.24,0,0,1,-7.105427357601002e-15,-48.57530236653191L-7.105427357601002e-15,-48.57530236653191A4.24,4.24,0,0,1,-3.8713043478260936,-44.351363030311745A44.519999999999996,44.519999999999996,0,1,0,6.434454807099524,-44.05256168868495A4.24,4.24,0,0,1,2.8143825854578575,-48.49370320632022Z"
                        fill="#ffd900"
                      ></path>
                    </g>
                  </svg>
                  <div className="lesson_symbol-main">
                    <img
                      className="lesson_symbol-crowns__icon"
                      src={`./img/lessons-icons/${it.icon}`}
                    />
                  </div>
                  <div className="lesson_symbol-crowns">
                    <img
                      className="lesson_symbol-crowns__icon"
                      src="./img/crown.svg"
                    />
                    <span className="lesson_symbol-crowns__title">
                      {it.crowns}
                    </span>
                  </div>
                </div>
                <span className="lesson_title">{it.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

LessonsList.propTypes = {
  lessons: PropTypes.array.isRequired,
};
