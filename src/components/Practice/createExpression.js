import { createRandomArray, createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createExpression(sign, elems = 2) {
  let expression;

  let nums = createRandomArray();
  if (elems > 2) {
    nums = nums.concat(createRandomArray(elems - 2));
  }

  expression = nums
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

  console.log("EXPRESSION: ", expression);
  let answer = math.evaluate(expression);
  console.log("ANSWER: ", answer);
  answer = parseFloat(answer.toFixed(2));

  return { answer, expression };
}
