import { createExpression } from "./createExpression";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export default function createTask(type, level = 2) {
  const { answer, expression } = createExpression(type, level);
  let variants;

  const checkInt = (n, d) => {
    n = Math.round(n);
    d = Math.round(d);
    if (Math.trunc(n / d)) {
      return ((n / d) ^ 0) === n / d
        ? Math.trunc(n / d)
        : `${Math.trunc(n / d)}\\frac{${n - d}}{${d}}`;
    } else {
      return `\\frac{${n}}{${d}}`;
    }
  };

  if (type === "fractions") {
    const { n, d } = math.fraction(answer);
    console.log("ewrfewf", n, d);
    variants = [
      {
        tex: checkInt(n, d),
        isAnswerRight: true,
      },
      {
        tex: checkInt(n * 0.4, d * 0.8),
        isAnswerRight: false,
      },
      {
        tex: checkInt(n * 0.8, d * 0.4),
        isAnswerRight: false,
      },
      {
        tex: checkInt(n * 0.6, d * 0.6),
        isAnswerRight: false,
      },
    ];
  } else {
    variants = [
      {
        tex: answer,
        isAnswerRight: true,
      },
      {
        tex: math.evaluate(answer + answer * 0.2),
        isAnswerRight: false,
      },
      {
        tex: math.evaluate(answer - answer * 0.2),
        isAnswerRight: false,
      },
      {
        tex: math.evaluate(answer + answer * 0.4),
        isAnswerRight: false,
      },
    ];
  }
  return { variants, expression };
}
