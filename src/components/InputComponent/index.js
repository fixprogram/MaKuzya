import React, { useEffect, useRef, useState } from "react";

export default function InputComponent({ checkAnswer }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input
        className="practice-input"
        ref={inputRef}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value.length > 0) {
            checkAnswer(value);
            setValue("");
          }
        }}
      />
    </>
  );
}
