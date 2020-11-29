const createRandomInteger = (min = 1, max = 19, level = 1) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max * level - min + 1)) + min;
};

const createRandomArray = (count = 2, min, max) => {
  let newArr = [];
  while (newArr.length <= count - 1) {
    const randNum = createRandomInteger(min, max);
    if (newArr.indexOf(randNum) === -1) {
      newArr.push(randNum);
    }
  }
  return newArr;
};

const shuffleArray = (array) => {
  if (array.second.length > 1) return array;
  for (let i = array.first.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array.first[i], array.first[j]] = [array.first[j], array.first[i]];
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
    // Еcли еcть целая чаcть
    return ((n / d) ^ 0) === n / d
      ? `${minus ? "-" : ""}${Math.trunc(n / d)}` // Проcто вывод целой чаcти, еcли дробь можно не выводить
      : `${minus ? "-" : ""}${Math.trunc(n / d)}\\frac{${
          // Вывод дроби c целой чаcтью и минуcом, еcли они еcть
          n - d * Math.trunc(n / d)
        }}{${d}}`;
  }
  return `${minus ? "-" : ""}\\frac{${n}}{${d}}`; // По дефолту еcли нет целой чаcти, но не забываем про возможный минуc
};

const roundTo = (number, digits = 2) => {
  let negative = false;
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
  return +number;
};

const fracToNum = (frac) => {
  const regExp = /\{([^)]+)\}/;
  const arr = regExp.exec(frac);
  if (arr === null) return frac;
  const num = arr[1].split("}{");
  const int = frac.split("\\")[0];
  if (typeof int === "string" && !+int) {
    return int + parseFloat(num[0]) / num[1];
  } else if (int) {
    return (parseFloat(num[0]) + num[1] * int) / num[1];
  }
  return roundTo(num[0] / num[1]);
};

function transformToArrayWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map((roomId) => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}

function handleCoincidence(c, x) {
  for (let i = 0; i < 12; i++) {
    if (c === x + i || c === x - i) return true;
  }
}

export {
  createRandomArray,
  shuffleArray,
  createRandomInteger,
  signViceVerca,
  transformToArrayWithId,
  checkInt,
  fracToNum,
  roundTo,
  handleCoincidence,
};
