import { sqrt } from "mathjs";
import { createRandomInteger, roundTo } from "../../misc/utils";

export function createSquareEquation() {
  let expression;

  let x = createRandomInteger(1, 9);
  let a = 1;
  let b = createRandomInteger(-9, 9);
  let c = -(x * x + b * x);

  expression = `${
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
    answer = x;
  } else if (discriminant > 0) {
    answer = [
      roundTo((-b + sqrt(discriminant)) / (2 * a)),
      roundTo((-b - sqrt(discriminant)) / (2 * a)),
    ];
  } else {
    answer = 0;
  }

  return { answer, expression };
}
