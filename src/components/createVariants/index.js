import { createFractionVariants } from "./createFractionVariants";
import { createSimpleVariants } from "./createSimpleVariants";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export const createNumVariant = (num, i, fixed = 0) => {
  const signs = ["+", "-", "*", "/"];
  return parseFloat(
    math.evaluate(num + " " + signs[i] + " " + parseFloat(num * 0.2))
  ).toFixed(fixed);
};

export const createVariants = (type, answer, count = 4) => {
  console.log("START creating: ");

  if (type === "fractions") {
    return createFractionVariants(answer, count);
  } else {
    return createSimpleVariants(answer, count);
  }
};
