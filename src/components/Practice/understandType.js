import React from "react";
import { createExpression } from "./createExpression";
import { createEquation } from "./createEquation";
import { createTriangle } from "./createTriangle";

export function understandType(type, level) {
  switch (type) {
    case "equation":
      return createEquation(type, level);
    case "pifagor":
      return createTriangle();
    default:
      return createExpression(type, level);
  }
}
