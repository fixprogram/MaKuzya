import { understandType } from "./understandType";
import { create, all } from "mathjs";
import { createVariants } from "../createVariants";

const config = {};
const math = create(all, config);

export default function createTask(type, level = 2) {
  let { answer, expression, coordinates, sides, charts } = understandType(
    type,
    level
  );

  if (!answer && sides) answer = { first: sides.shift(), second: [] };

  const variants = createVariants(type, answer);

  return {
    answer,
    variants,
    expression,
    coordinates,
    sides,
    charts,
  };
}
