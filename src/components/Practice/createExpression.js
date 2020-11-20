import { createRandomArray } from "../../misc/utils";
import { create, all } from "mathjs";
import { LESSONS_DATA } from "../../const";

const config = {};
const math = create(all, config);

function createFractionsExpression(type, elems) {
  const nums = createRandomArray(elems).sort((a, b) => a - b);
  let fractions = [];
  let fractionsDivides = [];
  for (let i = 0; i < nums.length / 2; i++) {
    fractionsDivides.push(nums[i] / nums[nums.length - i - 1]);
    fractions.push(`\\frac{${nums[i]}}{${nums[nums.length - i - 1]}}`);
  }

  let answer = fractionsDivides.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  let expression = fractions
    .map((item, i, arr) => {
      if (i !== arr.length - 1) {
        return item + " " + type.sign;
      } else {
        return item;
      }
    })
    .join(" ");

  return {
    answer: math.fraction(answer),
    expression,
  };
}

export function createExpression(type, elems) {
  let expression;
  let expressionType = LESSONS_DATA.find((item) => item.type === type);

  if (type === "fractions") {
    return createFractionsExpression(expressionType, elems * 2);
  }

  let nums = createRandomArray();
  if (elems > 2) {
    nums = nums.concat(createRandomArray(elems - 2));
  }

  expression = nums
    .map((item, i, arr) => {
      if (i !== arr.length - 1) {
        return item + " " + expressionType.sign;
      } else {
        return item;
      }
    })
    .join(" ");

  return { answer: math.evaluate(expression), expression };
}
