import { shuffleArray } from "../../misc/utils";

const createTriangle = () => {
  const triange = {
    coordinates: [
      {
        letter: "A",
        x: 25,
        y: 25,
      },
      {
        letter: "B",
        x: 25,
        y: 250,
      },
      {
        letter: "C",
        x: 250,
        y: 250,
      },
    ],
    sides: [5, 4, 3],
  };

  return {
    sides: triange.sides,
    coordinates: shuffleArray(triange.coordinates),
  };
};

export { createTriangle };
