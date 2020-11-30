import { shuffleArray } from "../../misc/utils";
import { createNumVariant } from "./index";

export const createSimpleVariants = (answer, count, fixed) => {
  let newArray;
  if (answer.length > 1) {
    newArray = answer.map((it) => new Array(count).fill(it));
  } else {
    newArray = [new Array(count).fill(answer[0])];
  }

  let variants = newArray.map((it) =>
    shuffleArray(
      it.map((el, j) => {
        return createNumVariant(el, j, fixed);
      })
    )
  );

  variants.forEach((it, i) => {
    it[it.length - 1] = newArray[i][0];
  });

  return variants;
};
