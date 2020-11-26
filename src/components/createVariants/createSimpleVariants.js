import { createNumVariant } from "./index";

export const createSimpleVariants = (answer, count) => {
  const newArray = new Array(count).fill(answer);

  const variants = newArray.map((el, i, arr) => {
    if (arr[i + 1]) {
      return createNumVariant(el, i);
    }
  });
  variants[variants.length - 1] = newArray[0];

  return variants;
};
