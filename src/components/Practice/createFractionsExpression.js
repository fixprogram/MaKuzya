import { createRandomArray } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

function createFractionsExpression(sign, elems) {
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
        return item + " " + sign;
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

export { createFractionsExpression };
