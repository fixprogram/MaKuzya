const createTriangle = () => {
  const coordinates = [
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
  ];
  const sides = [5, 4, 3];

  return {
    answer: [10],
    expression: "",
    canvasData: {
      sides: sides,
      coordinates: coordinates,
      params: { x: [], y: [] },
    },
    waysToResolve: ["radio"],
  };
};

export { createTriangle };
