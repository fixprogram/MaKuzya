export const AppRoutes = {
  ROOT: "/",
};

export const LESSON_TYPES = {
  SUMMATION: "summation",
  MINUS: "minus",
  MULTIPLICATION: "multiplication",
  DIVISION: "division",
  FRACTIONS: "fractions",
  COMPARISON: "comparison",
  EQUATION: "equation",
  PIFAGOR: "pifagor",
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
    type: LESSON_TYPES.FRACTIONS,
    sign: "+",
  },
  {
    type: LESSON_TYPES.COMPARISON,
    sign: [">", "<", "="],
  },
  {
    type: LESSON_TYPES.EQUATION,
    sign: ["+", "-", "*", "/"],
  },
  {
    type: LESSON_TYPES.PIFAGOR,
  },
];
