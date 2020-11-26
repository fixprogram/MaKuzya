import { checkInt } from "../../misc/utils";
import { createNumVariant } from "./index";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export const createFractionVariants = (answer, count) => {
  console.log("FRATIONS VARIANTS REATING: ");
  const { n, d } = math.fraction(answer);

  const newArray = new Array(count).fill(checkInt(n, d));

  const variants = newArray.map((el, i, arr) => {
    if (arr[i + 1]) {
      return checkInt(createNumVariant(n, i), createNumVariant(d, i));
    }
  });
  variants[variants.length - 1] = newArray[0];

  return variants;
};
