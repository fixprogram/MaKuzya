import { createExpression } from "./createExpression";
import { createEquation } from "./createEquation";
import { createSquareEquation } from "./createSquareEquation";
import { createTriangle } from "./createTriangle";
import { createInequality } from "./createInequality";
import { createFractionsExpression } from "./createFractionsExpression";
import { createCharts } from "./createCharts";
import { createFunction } from "./createFunction";
import { createDerivatives } from "./createDerivatives";
import { createDerivativesFunction } from "./createDerivativesFunction";
import { createDerivativesFractions } from "./createDerivativesFractions";
import { createDerivativesTrigonometry } from "./createDerivativesTrigonometry";
import { createPercents } from "./createPercents";
import { createPercentsChanging } from "./createPercentsChanging";
import { createPrecision } from "./createPrecision";

export function understandType(type, level) {
  const sign = ["+", "-", "*", "/"];
  switch (type) {
    case "equation":
      return createEquation(sign, level);
    case "quadratic-equation":
      return createSquareEquation(sign);
    case "functions":
      return createFunction();
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
    case "charts":
      return createCharts();
    case "derivatives":
      return createDerivatives();
    case "derivatives-functions":
      return createDerivativesFunction();
    case "derivatives-trigonometry":
      return createDerivativesTrigonometry();
    case "derivatives-fractions":
      return createDerivativesFractions();
    case "percents":
      return createPercents();
    case "percents-changing":
      return createPercentsChanging();
    case "precision":
      return createPrecision();
    case "converting":
      return createConverting();
    default:
      return createExpression(sign, level);
  }
}
