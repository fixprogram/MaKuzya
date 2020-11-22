const createRandomInteger = (min = 1, max = 9, level = 1) => {
  return Math.floor(
    min * level + Math.random() * (max * level + 1 - min * level)
  );
};

const createRandomArray = (count = 2) => {
  let newArr = [];
  for (let i = 0; i < count; i++) {
    newArr.push(createRandomInteger());
  }
  return newArr;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export { createRandomArray, shuffleArray, createRandomInteger };
