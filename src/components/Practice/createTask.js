import { understandType } from "./understandType";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export default function createTask(type, level = 2) {
  let { answer, expression, coordinates, sides } = understandType(type, level);

  if (!answer && sides) answer = sides.shift();

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

  switch (type) {
    case "fractions":
      const { n, d } = math.fraction(answer);
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
      break;
    case "equation":
      variants = [
        {
          tex: "x = " + answer,
          isAnswerRight: true,
        },
        {
          tex:
            "x = " +
            parseFloat(math.evaluate(answer + answer * 0.2).toFixed(2)),
          isAnswerRight: false,
        },
        {
          tex:
            "x = " +
            parseFloat(math.evaluate(answer - answer * 0.2).toFixed(2)),
          isAnswerRight: false,
        },
        {
          tex:
            "x = " +
            parseFloat(math.evaluate(answer + answer * 0.4).toFixed(2)),
          isAnswerRight: false,
        },
      ];
      break;
    default:
      variants = [
        {
          tex: answer,
          isAnswerRight: true,
        },
        {
          tex: parseFloat(math.evaluate(answer + answer * 0.2).toFixed(2)),
          isAnswerRight: false,
        },
        {
          tex: parseFloat(math.evaluate(answer - answer * 0.2).toFixed(2)),
          isAnswerRight: false,
        },
        {
          tex: parseFloat(math.evaluate(answer + answer * 0.4).toFixed(2)),
          isAnswerRight: false,
        },
      ];
  }

  return {
    variants,
    expression,
    coordinates,
    sides,
  };
}
