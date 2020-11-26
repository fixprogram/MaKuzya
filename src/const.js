export const AppRoutes = {
  ROOT: "/",
};

export const LESSON_TYPES = {
  SUMMATION: "summation",
  MINUS: "minus",
  MULTIPLICATION: "multiplication",
  DIVISION: "division",
  FRACTIONS_SUMMATION: "fractions-summation",
  FRACTIONS_DIVISION: "fractions-division",
  INEQUALITY: "inequality",
  EQUATION: "equation",
  PIFAGOR: "pifagor",
  DISCRIMINANT: "discriminant",
  CHARTS: "charts",
};

export const LESSONS_DATA = [
  {
    type: LESSON_TYPES.SUMMATION,
    sign: "+",
  },
  {
    type: LESSON_TYPES.MINUS,
    sign: "-",
  },
  {
    type: LESSON_TYPES.MULTIPLICATION,
    sign: "*",
  },
  {
    type: LESSON_TYPES.DIVISION,
    sign: "/",
  },
  {
    type: LESSON_TYPES.FRACTIONS_SUMMATION,
    sign: "+",
  },
  {
    type: LESSON_TYPES.FRACTIONS_DIVISION,
    sign: "/",
  },
  {
    type: LESSON_TYPES.INEQUALITY,
    sign: [">", "<", ">=", "<="],
  },
  {
    type: LESSON_TYPES.EQUATION,
    sign: ["+", "-", "*", "/"],
  },
  {
    type: LESSON_TYPES.PIFAGOR,
  },
  {
    type: LESSON_TYPES.DISCRIMINANT,
  },
  {
    type: LESSON_TYPES.CHARTS,
  },
];
