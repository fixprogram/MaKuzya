const initialState = {
  // lessons: [
  //   {
  //     title: `Summation`,
  //     type: LESSON_TYPES.SUMMATION,
  //     subject: "algebra",
  //   },
  //   {
  //     title: `Minus`,
  //     type: LESSON_TYPES.MINUS,
  //     subject: "algebra",
  //   },
  //   {
  //     title: `Multiplication`,
  //     type: LESSON_TYPES.MULTIPLICATION,
  //     subject: "algebra",
  //   },
  //   {
  //     title: `Division`,
  //     type: LESSON_TYPES.DIVISION,
  //     subject: "algebra",
  //   },
  //   {
  //     title: `Inequality`,
  //     type: LESSON_TYPES.INEQUALITY,
  //     subject: "algebra",
  //   },
  //   {
  //     title: `Fractions summation`,
  //     type: LESSON_TYPES.FRACTIONS,
  //     subject: "algebra",
  //   },
  //   {
  //     title: `Equation`,
  //     type: LESSON_TYPES.EQUATION,
  //     subject: "algebra",
  //   },
  //   {
  //     title: `Pifagor`,
  //     type: LESSON_TYPES.PIFAGOR,
  //     subject: "geometria",
  //   },
  //   {
  //     title: `Discriminant`,
  //     type: LESSON_TYPES.DISCRIMINANT,
  //     subject: "algebra",
  //   },
  // ],
  currentTask: null,
  variants: {
    first: [],
    second: [],
  },
  answer: null,
  coordinates: [{ letter: "", x: 0, y: 0 }],
  sides: [],
  subjects: ["Algebra", "Geometria"],
  practicePopupMessage: "Success!",
  charts: {
    coordinates: [{ left: 0, top: 0 }],
    params: { x: [], y: [] },
  },
  practiceProgress: 0,
  isSkipping: false,
};

// setLessons(initialState.lessons);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, currentTask: action.payload };
    case "SET_VARIANTS":
      return { ...state, variants: action.payload };
    case "SET_ANSWER":
      return { ...state, answer: action.payload };
    case "SET_COORDINATES":
      return { ...state, coordinates: action.payload };
    case "SET_SIDES":
      return { ...state, sides: action.payload };
    case "CHANGE_SUBJECT":
      return { ...state, activeSubject: action.payload };
    case "RESET_PRACTICE_PROGRESS": {
      return {
        ...state,
        practiceProgress: 0,
      };
    }
    case "SET_PRACTICE_POPUP_MESSAGE": {
      return {
        ...state,
        practicePopupMessage: action.payload,
      };
    }
    case "SET_CHARTS": {
      return Object.assign({}, state, {
        charts: action.payload,
      });
    }
    case "SET_PRACTICE_PROGRESS":
      return { ...state, practiceProgress: action.payload };
    case "SET_IS_SKIPPING":
      return { ...state, isSkipping: !state.isSkipping };
    default:
      return state;
  }
};

export { reducer };
