import { createRandomArray, createRandomInteger } from "../../misc/utils";

export const createCharts = (count = 7) => {
  const dotWidth = 16;
  let coordinates = [
    {
      left: 60 - dotWidth / 2,
      top: createRandomInteger(1, 10) * 30 - dotWidth / 2,
    },
  ];

  const randomLeft = createRandomArray(count, 3, 20).sort((a, b) => a - b);
  const randomTop = createRandomArray(count, 2, 10);

  for (let i = 1; i <= count; i++) {
    coordinates.push({
      left: randomLeft[i] * 30 - dotWidth / 2,
      top: randomTop[i] * 30 - dotWidth / 2,
    });
  }

  coordinates.push({
    left: 660 - dotWidth / 2,
    top: createRandomInteger(1, 10) * 30 - dotWidth / 2,
  });

  const params = {
    y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    x: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
    ],
  };

  const canvasData = { coordinates, params, sides: [] };

  const expressionTex = "";
  const answer = [0];

  const expressionTitle = `Mark dots whiCh are higher than 5`;

  return {
    answer,
    expression: { tex: expressionTex, title: expressionTitle },
    canvasData,
    waysToResolve: ["radio"],
  };
};
