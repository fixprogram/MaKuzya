const initialState = {
  currentTask: null,
  variants: {
    first: [],
    second: [],
  },
  answer: null,
  coordinates: [{ letter: "", x: 0, y: 0 }],
  sides: [],
  practicePopupMessage: "Success!",
  charts: {
    coordinates: [{ left: 0, top: 0 }],
    params: { x: [], y: [] },
  },
  practiceProgress: 0,
  isSkipping: false,
};

export default function (state = initialState, action) {
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
}
