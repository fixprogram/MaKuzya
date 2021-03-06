import { createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createDerivatives() {
  let a;
  let b;
  let c;
  let degree;

  let expressionTex;
  let answer;

  const count = new Array(4).fill(0);
  const derivativeVariants = count.map((it) => {
    a = createRandomInteger(-5, 5);
    b = createRandomInteger(-5, 5);
    c = createRandomInteger(-9, 9);
    degree = createRandomInteger(0, 3);

    expressionTex = `${b} * (${a === 0 ? "" : a}x ${c > 0 ? `+ ${c}` : c})${
      degree === 1 ? "" : "^" + degree
    }`;
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
