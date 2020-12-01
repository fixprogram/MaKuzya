import { createRandomArray, createRandomInteger } from "../../misc/utils";

export function createPercentsChanging() {
  const nums = createRandomArray(2, 1, 9).sort((a, b) => a < b);
  const percent = nums[0] * 10;
  const randomMultiply = nums[1] * createRandomInteger(5, 20);
  const resultNum = (percent / 100) * randomMultiply;

  const cases = 3;
  const caseNum = createRandomInteger(1, cases);

  let answer;
  let expressionTitle;
  let expressionTex = null;

  switch (caseNum) {
    case 1:
      answer = [(nums[0] / nums[1]) * 100];
      expressionTitle = `Change fractions to percents,`;
      expressionTex = `\\frac{${nums[0]}}{${nums[1]}}`;
      break;
    case 2:
      answer = [(percent * randomMultiply) / 100];
      expressionTitle = `Change to decimals.`;
      expressionTex = `${percent * randomMultiply} \%`;
      break;
    case 3:
      answer = [randomMultiply];
      expressionTitle = `Change to percents.`;
      expressionTex = `${randomMultiply / 100}`;
      break;
    // case 4:
    //   answer = [randomMultiply];
    //   expressionTitle = `What is the percent decrease of a $500 item on sale for $400?`;
    //   break;
  }

  return {
    answer,
    expression: { tex: expressionTex, title: expressionTitle },
    waysToResolve: ["input"],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
  };
}
