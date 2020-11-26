import { createRandomInteger } from "../../misc/utils";

export function createSquareEquation() {
  let expression;

  let x = createRandomInteger(1, 9);
  // let a = createRandomInteger(1, 2);
  let b = createRandomInteger(-9, 9);
  let c = -(x * x + b * x);

  expression = `${
    // (a === 1 ? "" : a) +
    "x^2 " +
    (b < 0 ? "" : "+ ") +
    (b === 1 ? "" : b) +
    "x " +
    (c < 0 ? "" : "+ ") +
    c +
    " = 0 "
  }`;

  const answer = x;

  return { answer, expression };
}
