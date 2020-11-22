import { createRandomArray, createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";
import { LESSONS_DATA } from "../../const";

const config = {};
const math = create(all, config);

export function createEquation(type = "equation", elems = 2) {
  let expression;
  let expressionType = LESSONS_DATA.find((item) => item.type === type);

  let nums = createRandomArray();
  if (elems > 2) {
    nums = nums.concat(createRandomArray(elems - 2));
  }

  const randomSign =
    expressionType.sign[createRandomInteger(0, expressionType.sign.length - 1)];
  const answer = nums[0];
  nums[0] = "x";

  expression = nums
    .map((item, i, arr) => {
      if (i !== arr.length - 1) {
        return item + " " + randomSign;
      } else {
        return item;
      }
    })
    .join(" ");

  console.log("EXPRESSION: ", expression);

  expression += ` = ${parseFloat(
    math.evaluate(answer + " " + randomSign + " " + nums[1]).toFixed(2)
  )}`;

  return { answer, expression };
}
