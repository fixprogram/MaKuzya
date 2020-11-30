import {
  createRandomArray,
  createRandomInteger,
  signViceVerca,
} from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createEquation(sign, elems = 2, initialAnswer = null) {
  let expressionTex;

  let nums = createRandomArray();
  if (elems > 2) {
    nums = nums.concat(createRandomArray(elems - 2));
  }

  const randomSign = sign[createRandomInteger(0, sign.length - 1)];
  let answer = nums[0];
  nums[0] = "x";

  expressionTex = nums
    .map((item, i, arr) => {
      if (i !== arr.length - 1) {
        return item + " " + randomSign;
      } else {
        return item;
      }
    })
    .join(" ");

  if (initialAnswer) {
    expressionTex += ` = ${initialAnswer}`;
    answer = parseFloat(
      math
        .evaluate(
          initialAnswer + " " + signViceVerca(randomSign) + " " + nums[1]
        )
        .toFixed(2)
    );
  } else {
    expressionTex += ` = ${parseFloat(
      math.evaluate(answer + " " + randomSign + " " + nums[1]).toFixed(2)
    )}`;
  }

  const expressionTitle = "Resolve the equation and choose right answer";

  return {
    answer: [answer],
    expression: { tex: expressionTex, title: expressionTitle },
    waysToResolve: ["radio"],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
  };
}
