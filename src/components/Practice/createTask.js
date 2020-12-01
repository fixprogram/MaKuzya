import { understandType } from "./understandType";
import { createVariants } from "../createVariants";
import { createRandomInteger, shuffleArray } from "../../misc/utils";

export default function createTask(type, level = 2) {
  let {
    answer,
    expression,
    canvasData,
    waysToResolve,
    variants,
  } = understandType(type, level);

  variants === undefined ? (variants = { 0: [] }) : variants;

  const wayToResolve =
    waysToResolve[createRandomInteger(0, waysToResolve.length - 1)];

  if (wayToResolve === "radio" && type.split("-")[0] !== "derivatives") {
    variants = shuffleArray(createVariants(type, answer));
    // } else if (wayToResolve === "input") {
    //   variants = [];
  } else {
    variants = shuffleArray(variants);
  }

  return {
    expression,
    answer,
    variants,
    canvasData,
    wayToResolve,
  };
}
