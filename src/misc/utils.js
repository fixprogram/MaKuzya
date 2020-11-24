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

const signViceVerca = (sign) => {
  switch (sign) {
    case "+":
      return "-";
    case "-":
      return "+";
    case "*":
      return "/";
    case "/":
      return "*";
    default:
      return sign;
  }
};

function transformToArrayWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map((roomId) => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}

// function setLessons(lessons) {
//   lessons.forEach(async (element) => {
//     await database.ref(`/subjects/${element.subject}/${element.type}`).set({
//       title: element.title,
//     });
//   });
// }

export {
  createRandomArray,
  shuffleArray,
  createRandomInteger,
  signViceVerca,
  transformToArrayWithId,
  // setLessons,
};
