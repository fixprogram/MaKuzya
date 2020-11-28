import { createNumVariant } from "./index";

export const createSimpleVariants = (answer, count) => {
  let newArray;
  if (answer.length > 1) {
    newArray = [
      new Array(count).fill(answer[0]),
      new Array(count).fill(answer[1]),
    ];
  } else {
    newArray = [new Array(count).fill(answer)];
  }

  let variants = {
    first: newArray[0].map((el, i, arr) => {
      if (arr[i + 1]) {
        return createNumVariant(el, i);
      }
    }),
    second: [],
  };

  if (newArray.length > 1) {
    variants.second = newArray[1].map((el, i, arr) => {
      if (arr[i + 1]) {
        return createNumVariant(el, i);
      }
    });
  }

  if (answer.length > 1) {
    variants.first[variants.first.length - 1] = newArray[0][0];
    variants.second[variants.second.length - 1] = newArray[1][0];
  } else {
    variants.first[variants.first.length - 1] = newArray[0][0];
  }

  return variants;
};
