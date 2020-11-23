import { LESSON_TYPES } from "./const";

const actionCreator = {
  setTask: (payload) => ({
    type: "SET_TASK",
    payload,
  }),
  setVariants: (payload) => ({
    type: "SET_VARIANTS",
    payload,
  }),
  setAnswer: (payload) => ({
    type: "SET_ANSWER",
    payload,
  }),
  setTopic: (payload) => ({
    type: "SET_TOPIC",
    payload,
  }),
  setCoordinates: (payload) => ({
    type: "SET_COORDINATES",
    payload,
  }),
  setSides: (payload) => ({
    type: "SET_SIDES",
    payload,
  }),
};

const initialState = {
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
      id: LESSON_TYPES.INEQUALITY,
      level: 2,
      progress: 0,
      icon: `${LESSON_TYPES.INEQUALITY}.svg`,
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
    {
      title: `Теорема Пифагора`,
      id: LESSON_TYPES.PIFAGOR,
      level: 1,
      progress: 0,
      icon: `summation.svg`,
    },
    {
      title: `Диcкриминант`,
      id: LESSON_TYPES.DISCRIMINANT,
      level: 1,
      progress: 0,
      icon: `summation.svg`,
    },
  ],
  currentTask: null,
  variants: [],
  answer: null,
  topic: "",
  coordinates: [],
  sides: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, currentTask: action.payload };
    case "SET_VARIANTS":
      return { ...state, variants: action.payload };
    case "SET_ANSWER":
      return { ...state, answer: action.payload };
    case "SET_TOPIC":
      return { ...state, topic: action.payload };
    case "SET_COORDINATES":
      return { ...state, coordinates: action.payload };
    case "SET_SIDES":
      return { ...state, sides: action.payload };
    default:
      return state;
  }
};

export { actionCreator, reducer };
