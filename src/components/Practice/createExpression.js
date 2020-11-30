import {
  createRandomArray,
  createRandomInteger,
  roundTo,
} from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createExpression(sign, elems = 2) {
  let nums = createRandomArray();
  if (elems > 2) {
    nums = nums.concat(createRandomArray(elems - 2));
  }

  const expressionTex = nums
    .map((item, i, arr) => {
      if (i !== arr.length - 1) {
        if (sign.length > 1) {
          return item + " " + sign[createRandomInteger(0, sign.length - 1)];
        }
        return item + " " + sign;
      } else {
        return item;
      }
    })
    .join(" ");

  const answer = [roundTo(math.evaluate(expression), 5)];
  const expressionTitle = "Resolve the expression and choose right answer";

  return {
    answer,
    expression: { tex: expressionTex, title: expressionTitle },
    waysToResolve: ["radio"],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
  };
}
