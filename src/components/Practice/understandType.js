import React from "react";
import { createExpression } from "./createExpression";
import { createEquation } from "./createEquation";
import { createTriangle } from "./createTriangle";
import { createInequality } from "./createInequality";

export function understandType(type, level) {
  console.log("TYPE: ", type);
  switch (type) {
    case "equation":
      return createEquation(type, level);
    case "pifagor":
      return createTriangle();
    case "inequality":
      return createInequality();
    default:
      return createExpression(type, level);
  }
}
