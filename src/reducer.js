import { LESSON_TYPES } from "./const";

const INCREASE_CROWNS = "INCREASE_CROWNS";
const INCREASE_STREAK = "INCREASE_STREAK";
const INCREASE_LINGOTS = "INCREASE_LINGOTS";

const actionCreator = {
  increaseCrowns: (count = 1) => {
    return {
      type: INCREASE_CROWNS,
      payload: count,
    };
  },
  increaseStreak: (count = 1) => {
    return {
      type: INCREASE_STREAK,
      payload: count,
    };
  },
  increaseLingots: (count) => {
    return {
      type: INCREASE_LINGOTS,
      payload: count,
    };
  },
};

const initialState = {
  crowns: 0,
  streak: 0,
  lingots: 10,
  lessons: [
    {
      title: `Сложение`,
      id: LESSON_TYPES.SUMMATION,
      level: 1,
      progress: 0,
      icon: `${LESSON_TYPES.SUMMATION}.svg`,
    },
    {
      title: `Вычитание`,
      id: LESSON_TYPES.MINUS,
      level: 2,
      progress: 0,
      icon: `${LESSON_TYPES.MINUS}.svg`,
    },
    {
      title: `Умножение`,
      id: LESSON_TYPES.MULTIPLICATION,
      level: 4,
      progress: 0,
      icon: `${LESSON_TYPES.MULTIPLICATION}.svg`,
    },
    {
      title: `Деление`,
      id: LESSON_TYPES.DIVISION,
      level: 3,
      progress: 0,
      icon: `${LESSON_TYPES.DIVISION}.svg`,
    },
    {
      title: `Сравнение`,
      id: LESSON_TYPES.COMPARISON,
      level: 2,
      progress: 0,
      icon: `${LESSON_TYPES.COMPARISON}.svg`,
    },
    {
      title: `Сложение Дробей`,
      id: LESSON_TYPES.FRACTIONS,
      level: 4,
      progress: 0,
      icon: `summation.svg`,
    },
    {
      title: `Уравнения`,
      id: LESSON_TYPES.EQUATION,
      level: 2,
      progress: 0,
      icon: `summation.svg`,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_CROWNS:
      return Object.assign({}, state, {
        crowns: state.crowns + action.payload,
      });
    case INCREASE_STREAK:
      return Object.assign({}, state, {
        streak: state.streak + action.payload,
      });
    case INCREASE_LINGOTS:
      return Object.assign({}, state, {
        lingots: state.lingots + action.payload,
      });
    default:
      return state;
  }
};

export { actionCreator, reducer };
