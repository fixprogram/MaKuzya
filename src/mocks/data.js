import { LESSON_TYPES } from "../const";

const data = {
  header: {
    tabs: [
      {
        icon: `learn.svg`,
        title: `Learn`,
      },
      {
        icon: `stories.svg`,
        title: `Stories`,
      },
      {
        icon: `discuss.svg`,
        title: `Discuss`,
      },
      {
        icon: `shop.svg`,
        title: `Shop`,
      },
      {
        icon: `more.svg`,
        title: `More`,
      },
    ],
  },
  lessons: [
    {
      title: `Сложение`,
      id: LESSON_TYPES.SUMMATION,
      level: 1,
      progress: 0,
      icon: `summation.svg`,
    },
    {
      title: `Вычитание`,
      id: LESSON_TYPES.MINUS,
      level: 2,
      progress: 0,
      icon: `minus.svg`,
    },
    {
      title: `Умножение`,
      id: LESSON_TYPES.MULTIPLICATION,
      level: 4,
      progress: 0,
      icon: `multiplication.svg`,
    },
    {
      title: `Деление`,
      id: LESSON_TYPES.DIVISION,
      level: 3,
      progress: 0,
      icon: `division.svg`,
    },
    {
      title: `Сложение Дробей`,
      id: LESSON_TYPES.FRACTIONS_SUMMATION,
      level: 4,
      progress: 0,
      icon: `summation.svg`,
    },
  ],
};

export default data;
