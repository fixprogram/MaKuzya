import React, { useState, useRef, useEffect } from "react";
import ProgressBar from "progressbar.js";

export default function DynamicProgress({ progress }) {
  const [percent, setPercent] = useState(progress);
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = new ProgressBar.Path(progressRef.current, {
      easing: "easeInOut",
      duration: 1400,
    });

    bar.set(0);
    bar.animate(percent / 100);
  }, []);

  {
    /* <Circle
    percent={percent}
    strokeColor={"#1cb0f6"}
    status={percent >= 100 ? "success" : "active"}
  /> */
  }
  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 500 500"
        xmlSpace="preserve"
      >
        <path
          fillOpacity="0"
          strokeWidth="10"
          strokeLinejoin="round"
          stroke="#bbb"
          d="M449.98,500H50.02C22.39,500,0,477.61,0,449.98
	V50.02C0,22.39,22.39,0,50.02,0h399.96C477.61,0,500,22.39,500,50.02v399.96C500,477.61,477.61,500,449.98,500z"
        />
        <path
          ref={progressRef}
          fillOpacity="0"
          strokeWidth="25"
          strokeLinejoin="round"
          stroke="#ED6A5A"
          d="M449.98,500H50.02C22.39,500,0,477.61,0,449.98
	V50.02C0,22.39,22.39,0,50.02,0h399.96C477.61,0,500,22.39,500,50.02v399.96C500,477.61,477.61,500,449.98,500z"
        />
      </svg>
    </>
  );
}
