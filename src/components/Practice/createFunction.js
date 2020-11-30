import { createRandomArray, createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);
const parser = math.parser();

export function createFunction() {
  const a = 1;
  const b = createRandomInteger(-5, 5);
  const c = createRandomInteger(-9, 9);

  const domain = createRandomArray(3, -3, 3);

  const expressionTex = `f(x) = ${
    (a === 1 ? "" : a) +
    "x^2 " +
    (b < 0 ? "" : "+ ") +
    (b === 0 || b === 1 ? "" : b) +
    "x " +
    (c < 0 ? "" : "+ ") +
    c
  }`;

  parser.evaluate(expressionTex);
  const answer = [
    parser.evaluate(`f(${domain[0]})`),
    parser.evaluate(`f(${domain[1]})`),
    parser.evaluate(`f(${domain[2]})`),
  ];
  parser.clear();

  const expressionTitle = `Find the range of f for the domain {${domain[0]}, ${domain[1]}, ${domain[2]}}`;

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
