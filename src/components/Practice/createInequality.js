import { createExpression } from "./createExpression";
import { createEquation } from "./createEquation";

const signs = [">", "<", ">=", "<="];

export function createInequality() {
  const sign = ["+", "-", "*", "/"];
  const exp = createExpression(sign);
  let { answer, expression } = createEquation(sign, 2, exp.answer);
  expression = expression.replace(/\=.*/, ""); // Заменяем вcе поcле равно на пуcтую cтроку
  const inequality = expression + " " + signs[1] + " " + exp.expression;

  const expressionTitle = "Resolve the inequality and choose right answer";

  return {
    answer,
    expression: { tex: inequality, title: expressionTitle },
    waysToResolve: ["radio"],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
  };
}
