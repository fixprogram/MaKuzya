import { createRandomArray, createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";
import { LESSONS_DATA } from "../../const";

const config = {};
const math = create(all, config);

function signViceVerca(sign) {
  switch (sign) {
    case "+":
      return "-";
    case "-":
      return "+";
    case "*":
      return "/";
    case "/":
      return "*";
    default:
      return sign;
  }
}

export function createEquation(
  type = "equation",
  elems = 2,
  initialAnswer = null
) {
  let expression;
  let expressionType = LESSONS_DATA.find((item) => item.type === type);

  let nums = createRandomArray();
  if (elems > 2) {
    nums = nums.concat(createRandomArray(elems - 2));
  }

  const randomSign =
    expressionType.sign[createRandomInteger(0, expressionType.sign.length - 1)];
  let answer = nums[0];
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

  expression += ` = ${
    initialAnswer
      ? initialAnswer
      : parseFloat(
          math.evaluate(answer + " " + randomSign + " " + nums[1]).toFixed(2)
        )
  }`;

  if (initialAnswer)
    answer = parseFloat(
      math
        .evaluate(
          initialAnswer + " " + signViceVerca(randomSign) + " " + nums[1]
        )
        .toFixed(2)
    );

  return { answer, expression };
}
