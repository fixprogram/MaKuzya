import { createRandomArray } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

function createFractionsExpression(sign, elems = 2) {
  const nums = createRandomArray(elems * 2).sort((a, b) => a - b);
  let fractions = [];
  let fractionsDivides = [];
  for (let i = 0; i < nums.length / 2; i++) {
    fractionsDivides.push(nums[i] / nums[nums.length - i - 1]);
    fractions.push(`\\frac{${nums[i]}}{${nums[nums.length - i - 1]}}`);
  }

  let answer = fractionsDivides.reduce((accumulator, currentValue) =>
    math.evaluate(accumulator + " " + sign[0] + " " + currentValue)
  );

  let expression = fractions
    .map((item, i, arr) => {
      if (i !== arr.length - 1) {
        return item + " " + sign;
      } else {
        return item;
      }
    })
    .join(" ");

  return {
    answer: [answer],
    expression,
  };
}

export { createFractionsExpression };
