import { createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createDerivativesFunction() {
  let a;
  let b;
  let c;
  let expressionTex;
  let answer;

  const count = new Array(4).fill(0);
  const derivativeVariants = count.map((it, i) => {
    a = createRandomInteger(-5, 5);
    b = createRandomInteger(-5, 5);
    c = createRandomInteger(-9, 9);

    expressionTex =
      (a === 0 || a === 1 ? "" : a) +
      "x^2 " +
      (b < 0 ? "" : "+ ") +
      (b === 0 || b === 1 ? "" : b) +
      "x " +
      (c < 0 ? "" : "+ ") +
      c;

    answer = `f'(x) = ${math.derivative(expressionTex, "x").toString()}`;
    return answer;
  });

  expressionTex = "f(x) = " + expressionTex;
  const expressionTitle = `Find the derivative of f(x)`;

  return {
    answer: [answer],
    expression: { tex: expressionTex, title: expressionTitle },
    waysToResolve: ["radio"],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
    variants: [derivativeVariants],
  };
}
