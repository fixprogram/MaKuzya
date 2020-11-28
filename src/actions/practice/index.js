export default {
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
  setCoordinates: (payload) => ({
    type: "SET_COORDINATES",
    payload,
  }),
  setSides: (payload) => ({
    type: "SET_SIDES",
    payload,
  }),
  resetPracticeProgress: () => ({
    type: "RESET_PRACTICE_PROGRESS",
  }),
  setPracticePopupMessage: (payload) => ({
    type: "SET_PRACTICE_POPUP_MESSAGE",
    payload,
  }),
  setCharts: (payload) => ({
    type: "SET_CHARTS",
    payload,
  }),
  setPracticeProgress: (payload) => ({
    type: "SET_PRACTICE_PROGRESS",
    payload,
  }),
  setIsSkipping: () => ({
    type: "SET_IS_SKIPPING",
  }),
};
