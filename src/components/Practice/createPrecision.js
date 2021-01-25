import { createRandomInteger } from "../../misc/utils";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export function createPrecision() {
  console.log(math.compareNatural(math.unit("12.7 cm"), math.unit("4 inch")));

  const random = createRandomInteger(2, 9);

  const params = [100, 1760, 2.2, 36, 100, 1000, 0.6];

  let answer;

  const titles = [
    `If 1 kilometer equals 1,000 meters, and 1 dekameter equals 10 meters, how many dekameters are in ${random} kilometers?`,
    `If 1,760 yards equal 1 mile, how many yards are in ${random} miles?`,
    `If 2.2 pounds equal 1 kilogram, ${random} pounds equal approximately how many kilograms?`,
    `If 36 inches equal 1 yard, ${random} yards equal how many inches?`,
    `If 100 centimeters equal 1 meter, ${random} meters equal how many centimeters?`,
    `If 1,000 grams equal 1 kilogram, ${random} kilograms equal how many grams?`,
    `If a kilometer is about 0.6 mile, how many miles are in ${random} kilometers?`,
  ];
  const idx = createRandomInteger(0, titles.length - 1);

  switch (idx) {
    case 2:
      answer = random / params[idx];
      break;
    default:
      answer = random * params[idx];
  }

  const expressionTitle = titles[idx];

  const expressionTex = null;

  return {
    answer: [answer],
    expression: { tex: expressionTex, title: expressionTitle },
    waysToResolve: ["radio"],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
  };
}
