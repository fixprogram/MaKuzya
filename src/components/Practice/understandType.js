import { createExpression } from "./createExpression";
import { createEquation } from "./createEquation";
import { createSquareEquation } from "./createSquareEquation";
import { createTriangle } from "./createTriangle";
import { createInequality } from "./createInequality";
import { createFractionsExpression } from "./createFractionsExpression";
import { LESSONS_DATA } from "../../const";

export function understandType(type, level) {
  const { sign } = LESSONS_DATA.find((item) => item.type === type);
  console.log("SIGN:  ", sign);
  // if(type.split('-')[0]) type = type.split('-')
  switch (type) {
    case "equation":
      return createEquation(sign, level);
    case "quadratic-equation":
      return createSquareEquation(sign);
    case "pifagor":
      return createTriangle();
    case "inequality":
      return createInequality();
    case "fractions-summation":
      return createFractionsExpression(sign, level);
    case "fractions-division":
      return createFractionsExpression(sign, level);
    case "fractions-minus":
      return createFractionsExpression(sign, level);
    case "fractions-multiplication":
      return createFractionsExpression(sign, level);
    default:
      return createExpression(sign, level);
  }
}
