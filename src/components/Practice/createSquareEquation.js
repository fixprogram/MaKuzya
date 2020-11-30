import { sqrt } from "mathjs";
import { createRandomInteger, roundTo } from "../../misc/utils";

export function createSquareEquation() {
  const x = createRandomInteger(1, 9);
  const a = 1;
  const b = createRandomInteger(-9, 9);
  const c = -(x * x + b * x);

  const expressionTex = `${
    (a === 1 ? "" : a) +
    "x^2 " +
    (b < 0 ? "" : "+ ") +
    (b === 1 ? "" : b) +
    "x " +
    (c < 0 ? "" : "+ ") +
    c +
    " = 0 "
  }`;

  const discriminant = c !== 0 ? b * b - 4 * a * c : 0;
  let answer;

  if (discriminant === 0) {
    answer = [x];
  } else if (discriminant > 0) {
    answer = [
      roundTo((-b + sqrt(discriminant)) / (2 * a)),
      roundTo((-b - sqrt(discriminant)) / (2 * a)),
    ];
  } else {
    answer = [0];
  }

  const expressionTitle =
    "Resolve the quadrati equation and choose right answer";

  return {
    answer: answer,
    expression: { tex: expressionTex, title: expressionTitle },
    waysToResolve: ["radio"],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
  };
}
