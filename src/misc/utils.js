const randomInteger = (level = 1) => {
  return Math.floor(1 * level + Math.random() * (9 * level + 1 - 1 * level));
};

const createRandomArray = (count = 2) => {
  let newArr = [];
  for (let i = 0; i < count; i++) {
    newArr.push(randomInteger());
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

export { createRandomArray, shuffleArray };
