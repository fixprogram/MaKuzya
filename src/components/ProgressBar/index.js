import React from "react";

export default function ProgressBar({ progress, children }) {
  return (
    <section className="progress_wrapper">
      <div className="progress_bar">
        <div className="progress_inner">
          {children}
          <div className="progress_line">
            <div
              className="progress_fill"
              style={{ width: progress + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
