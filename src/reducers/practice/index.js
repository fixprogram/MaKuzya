const initialState = {
  currentTask: {
    expression: { tex: "", title: "" },
    answer: null,
    variants: [[]],
    canvasData: {
      coordinates: [{ letter: "", x: [], y: [] }],
      sides: [],
      params: { x: [], y: [] },
    },
    wayToResolve: "",
  },
  practicePopupMessage: "Success!",
  practiceProgress: 0,
  isSkipping: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, currentTask: action.payload };
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

    case "SET_PRACTICE_PROGRESS":
      return { ...state, practiceProgress: action.payload };
    case "SET_IS_SKIPPING":
      return { ...state, isSkipping: !state.isSkipping };
    default:
      return state;
  }
}
