import { createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createDerivatives() {
  let a = createRandomInteger(-5, 5);
  let b = createRandomInteger(-5, 5);
  let c = createRandomInteger(-9, 9);

  let expressionTex =
    (a === 0 || a === 1 ? "" : a) +
    "x^2 " +
    (b < 0 ? "" : "+ ") +
    (b === 0 || b === 1 ? "" : b) +
    "x " +
    (c < 0 ? "" : "+ ") +
    c;

  const expressionTitle = `Find the derivative of f(x)`;
  const answer = math.derivative(expressionTex, "x").toString();
  const count = new Array(3).fill(0);
  let derivativeVariants = count.map((it, i) => {
    a = createRandomInteger(-5, 5);
    b = createRandomInteger(-5, 5);
    c = createRandomInteger(-9, 9);

    let tex =
      (a === 0 || a === 1 ? "" : a) +
      "x^2 " +
      (b < 0 ? "" : "+ ") +
      (b === 0 || b === 1 ? "" : b) +
      "x " +
      (c < 0 ? "" : "+ ") +
      c;

    return math.derivative(tex, "x").toString();
  });
  derivativeVariants.push(answer);

  expressionTex = "f(x) = " + expressionTex;

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
