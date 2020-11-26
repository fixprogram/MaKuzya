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

const checkInt = (n, d) => {
  n = Math.round(n);
  d = Math.round(d);
  if (Math.trunc(n / d)) {
    return ((n / d) ^ 0) === n / d
      ? Math.trunc(n / d)
      : `${Math.trunc(n / d)}\\frac{${n - d}}{${d}}`;
  } else {
    return `\\frac{${n}}{${d}}`;
  }
};

const roundTo = (n, digits) => {
  const negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  const multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
    n = (n * -1).toFixed(digits);
  }
  return n;
};

const fracToNum = (frac) => {
  const regExp = /\{([^)]+)\}/;
  const arr = regExp.exec(frac);
  if (arr === null) return frac;
  const num = arr[1].split("}{");
  const int = frac.split("\\")[0];
  if (int) return (parseFloat(num[0]) + num[1] * int) / num[1];
  return roundTo(num[0] / num[1], 2);
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
  checkInt,
  fracToNum,
  roundTo,
  // setLessons,
};
