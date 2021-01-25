import React, { useState } from "react";
import { Progress } from "rsuite";

const { Circle } = Progress;

export default function DynamicProgress({ progress }) {
  const [percent, setPercent] = useState(progress);

  return (
    <Circle
      percent={percent}
      strokeColor={"#1cb0f6"}
      status={percent >= 100 ? "success" : "active"}
    />
  );
}
