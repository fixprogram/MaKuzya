import { createRandomArray, createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createDerivativesTrigonometry() {
  const trigonometry = ["sin(", "cos(", "tan(", "cot(", "sec(", "csc("];
  const count = createRandomArray(4, 0, trigonometry.length - 1);

  let degree;
  let expressionTex = "";
  let answer;

  let derivativeVariants = count.map((it) => {
    degree = createRandomInteger(-3, 3);
    expressionTex = trigonometry[it];
    expressionTex += `x)${degree === 1 ? "" : "^" + degree}`;
    console.log(expressionTex);

    answer = math.derivative(expressionTex, "x").toString();
    answer = `f'(x) = ` + answer;

    return answer;
  });

  expressionTex = "f(x) = " + expressionTex;
  const expressionTitle = `Find the derivative of f(x)`;
  console.log(derivativeVariants);

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
