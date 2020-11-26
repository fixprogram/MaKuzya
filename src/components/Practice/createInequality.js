import { createExpression } from "./createExpression";
import { createEquation } from "./createEquation";

const signs = [">", "<", ">=", "<="];

const createInequality = () => {
  const sign = ["+", "-", "*", "/"];
  const exp = createExpression(sign);
  let { answer, expression } = createEquation(sign, 2, exp.answer);
  expression = expression.replace(/\=.*/, ""); // Заменяем вcе поcле равно на пуcтую cтроку
  const inequality = expression + " " + signs[1] + " " + exp.expression;

  return { answer, expression: inequality };
};

export { createInequality };
