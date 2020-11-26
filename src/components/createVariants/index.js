import { createFractionVariants } from "./createFractionVariants";
import { createSimpleVariants } from "./createSimpleVariants";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export const createNumVariant = (num, i, fixed = 0) => {
  const signs = ["+", "-", "+", "-", "*", "/"];
  const nums = [0.2, 0.3, 0.1, 0.4];
  return parseFloat(
    math.evaluate(num + " " + signs[i] + " " + parseFloat(num * nums[i]))
  ).toFixed(fixed);
};

export const createVariants = (type, answer, count = 4) => {
  console.log("START creating: ");

  if (type.split("-")[1]) {
    // console.log("ANSER: ", type.split("-")[1]);
    return createFractionVariants(answer, count);
  } else {
    return createSimpleVariants(answer, count);
  }
};
