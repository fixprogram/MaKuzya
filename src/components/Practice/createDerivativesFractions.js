import { createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createDerivativesFractions() {
  const count = new Array(4).fill(0);

  let degree;
  let expressionTex = "";
  let answer;

  let derivativeVariants = count.map((it) => {
    degree = createRandomInteger(0, 3);
    expressionTex = `\\frac{x${
      degree === 1 ? "" : "^" + degree
    }}{(x + ${createRandomInteger(3, 9)})}`;

    answer = math
      .derivative(
        `x${degree === 1 ? "" : "^" + degree} / (x + ${createRandomInteger(
          3,
          9
        )})`,
        "x"
      )
      .toString();
    answer = answer.split("/");

    answer = `\\frac{${answer[0]}}{${answer[1]}}`;

    answer = `f'(x) = ` + answer;

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
