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

  return { sides: triange.sides, coordinates: triange.coordinates };
};

export { createTriangle };
