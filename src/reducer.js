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
  variants: [],
  answer: null,
  coordinates: [],
  sides: [],
  subjects: ["Algebra", "Geometria"],
  animationCount: 0,
  practicePopupMessage: "Success!",
};

// setLessons(initialState.lessons);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, currentTask: action.payload };
    case "SET_VARIANTS":
      console.log("VARIANTS SETTING: ", action.payload);
      return { ...state, variants: action.payload };
    case "SET_ANSWER":
      return { ...state, answer: action.payload };
    case "SET_COORDINATES":
      return { ...state, coordinates: action.payload };
    case "SET_SIDES":
      return { ...state, sides: action.payload };
    case "CHANGE_SUBJECT":
      return { ...state, activeSubject: action.payload };
    case "INCREASE_ANIMATION_COUNT":
      return {
        ...state,
        animationCount: state.animationCount + action.payload,
      };
    case "RESET_ANIMATION_COUNT": {
      return {
        ...state,
        animationCount: 0,
      };
    }
    case "SET_PRACTICE_POPUP_MESSAGE": {
      return {
        ...state,
        practicePopupMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export { reducer };
