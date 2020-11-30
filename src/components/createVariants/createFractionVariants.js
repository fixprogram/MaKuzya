import { checkInt, shuffleArray } from "../../misc/utils";
import { createNumVariant } from "./index";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export const createFractionVariants = (answer, count) => {
  let { n, d } = math.fraction(answer[0]);

  let newArray;
  if (answer.length > 1) {
    newArray = answer.map((it, i) =>
      new Array(count).fill(checkInt(n, d, answer[i] < 0))
    );
  } else {
    newArray = [new Array(count).fill(checkInt(n, d, answer[0] < 0))];
  }

  let variants = newArray.map((it) =>
    shuffleArray(
      it.map((el, j) => {
        return checkInt(
          createNumVariant(n, j),
          createNumVariant(d, j),
          answer[0] < 0
        );
      })
    )
  );

  variants.forEach((it, i) => {
    it[it.length - 1] = newArray[i][0];
  });

  return variants;
};
