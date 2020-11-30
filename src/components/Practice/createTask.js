import { understandType } from "./understandType";
import { createVariants } from "../createVariants";
import { createRandomInteger, shuffleArray } from "../../misc/utils";

export default function createTask(type, level = 2) {
  let { answer, expression, canvasData, waysToResolve } = understandType(
    type,
    level
  );

  let variants = { 0: [] };

  const wayToResolve =
    waysToResolve[createRandomInteger(0, waysToResolve.length - 1)];

  if (wayToResolve === "radio")
    variants = shuffleArray(createVariants(type, answer));

  return {
    expression,
    answer,
    variants,
    canvasData,
    wayToResolve,
  };
}
