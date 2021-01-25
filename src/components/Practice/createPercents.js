import {
  createRandomArray,
  createRandomInteger,
  roundTo,
} from "../../misc/utils";

export function createPercents() {
  const nums = createRandomArray(2, 1, 9).sort((a, b) => a < b);
  const percent = nums[0] * 10;
  const randomMultiply = nums[1] * createRandomInteger(5, 15);
  const resultNum = roundTo((percent / 100) * randomMultiply, 0);

  const cases = 3;
  const caseNum = createRandomInteger(1, cases);

  let answer;
  let expressionTitle;

  switch (caseNum) {
    case 1:
      answer = [resultNum];
      expressionTitle = `What is ${percent}% of ${randomMultiply}`;
      break;
    case 2:
      answer = [resultNum / randomMultiply];
      expressionTitle = `${resultNum} is what percent of ${randomMultiply}?`;
      break;
    case 3:
      answer = [randomMultiply];
      expressionTitle = `${resultNum} is ${percent}% of what number?`;
      break;
    // case 4:
    //   answer = [randomMultiply];
    //   expressionTitle = `What is the percent decrease of a $500 item on sale for $400?`;
    //   break;
  }

  return {
    answer,
    expression: { tex: null, title: expressionTitle },
    waysToResolve: ["radio"],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
  };
}
