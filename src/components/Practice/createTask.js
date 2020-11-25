import { understandType } from "./understandType";
import { create, all } from "mathjs";
import { createVariants } from "../createVariants";

const config = {};
const math = create(all, config);

export default function createTask(type, level = 2) {
  let { answer, expression, coordinates, sides } = understandType(type, level);

  if (!answer && sides) answer = sides.shift();

  const variants = createVariants(type, answer);

  return {
    variants,
    expression,
    coordinates,
    sides,
  };
}
