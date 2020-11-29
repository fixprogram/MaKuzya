import { createFractionVariants } from "./createFractionVariants";
import { createSimpleVariants } from "./createSimpleVariants";
import { create, all } from "mathjs";
import { roundTo } from "../../misc/utils";

const config = {};
const math = create(all, config);

export const createNumVariant = (num, i, fixed = 0) => {
  const signs = ["+", "-", "+", "-", "*", "/"];
  const nums = [0.6, 0.5, 0.7];
  return roundTo(
    math.evaluate(num + " " + signs[i] + " " + parseFloat(num * nums[i])),
    fixed
  );
};

export const createVariants = (type, answer, count = 4) => {
  if (type.split("-")[0] === "fractions") {
    return createFractionVariants(answer, count);
  } else if (type === "charts") {
    return createSimpleVariants(answer, count);
  }
  return createSimpleVariants(answer, count, type === "division" ? 2 : 0);
};
