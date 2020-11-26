const createRandomInteger = (min = 1, max = 9, level = 1) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createRandomArray = (count = 2, min, max) => {
  let newArr = [];
  // for (let i = 0; i < count; i++) {
  //   newArr.push(createRandomInteger(min, max));
  // }
  while (newArr.length < count - 1) {
    const randNum = createRandomInteger(min, max);
    if (newArr.indexOf(randNum) === -1) {
      newArr.push(randNum);
    }
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

const checkInt = (n, d, minus) => {
  n = Math.round(n);
  d = Math.round(d);
  if (Math.trunc(n / d)) {
    return ((n / d) ^ 0) === n / d
      ? Math.trunc(n / d)
      : `${Math.trunc(n / d)}\\frac{${n - d}}{${d}}`;
  }
  return `${minus ? "-" : ""}\\frac{${n}}{${d}}`;
};

const roundTo = (number, digits) => {
  let negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (number < 0) {
    negative = true;
    number = number * -1;
  }
  const multiplicator = Math.pow(10, digits);
  number = parseFloat((number * multiplicator).toFixed(11));
  number = (Math.round(number) / multiplicator).toFixed(digits);
  if (negative) {
    number = (number * -1).toFixed(digits);
  }
  return number;
};

const fracToNum = (frac) => {
  const regExp = /\{([^)]+)\}/;
  const arr = regExp.exec(frac);
  if (arr === null) return frac;
  const num = arr[1].split("}{");
  const int = frac.split("\\")[0];
  if (typeof int === "string") {
    return int + parseFloat(num[0]) / num[1];
  } else if (int) {
    return (parseFloat(num[0]) + num[1] * int) / num[1];
  }
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
