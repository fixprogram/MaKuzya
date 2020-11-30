import { createRandomArray } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

function createFractionsExpression(sign, elems = 2) {
  const nums = createRandomArray(elems * 2);
  let fractions = [];
  let fractionsDivides = [];
  let int = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    fractionsDivides.push(nums[i] / nums[nums.length - i - 1]); // Приводим обычную дробь к деcятичной чтобы вычиcлить правильный ответ
    int = Math.floor(nums[i] / nums[nums.length - i - 1]); // Находим целую чаcть
    if (int > 0) nums[i] -= nums[nums.length - i - 1] * int; // Вычитаем ее из чиcлителя
    if (nums[i] > 0) {
      fractions.push(
        `${int > 0 ? int : ""}\\frac{${nums[i]}}{${nums[nums.length - i - 1]}}`
      );
    } else {
      fractions.push(`${int}`);
    }
  }

  let answer = fractionsDivides.reduce((accumulator, currentValue) =>
    math.evaluate(accumulator + " " + sign[0] + " " + currentValue)
  );

  const expressionTex = fractions
    .map((item, i, arr) => {
      if (i !== arr.length - 1) {
        return item + " " + sign;
      } else {
        return item;
      }
    })
    .join(" ");

  const expressionTitle = "Resolve the expression and choose right answer";

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

export { createFractionsExpression };
