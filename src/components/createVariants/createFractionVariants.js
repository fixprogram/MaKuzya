import { checkInt } from "../../misc/utils";
import { createNumVariant } from "./index";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export const createFractionVariants = (answer, count) => {
  let { n, d } = math.fraction(answer[0]);

  // const newArray = new Array(count).fill(checkInt(n, d, answer[0] < 0));

  let newArray;
  if (answer.length > 1) {
    newArray = [
      new Array(count).fill(checkInt(n, d, answer[0] < 0)),
      new Array(count).fill(checkInt(n, d, answer[1] < 0)),
    ];
  } else {
    newArray = [new Array(count).fill(checkInt(n, d, answer[0] < 0))];
  }

  let variants = {
    first: newArray[0].map((el, i, arr) => {
      if (arr[i + 1]) {
        return checkInt(
          createNumVariant(n, i),
          createNumVariant(d, i),
          answer[0] < 0
        );
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
