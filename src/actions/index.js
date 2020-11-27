export const actionCreator = {
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
  changeSubject: (payload) => ({
    type: "CHANGE_SUBJECT",
    payload,
  }),
  increaseAnimationCount: () => ({
    type: "INCREASE_ANIMATION_COUNT",
    payload: 1,
  }),
  resetAnimationCount: () => ({
    type: "RESET_ANIMATION_COUNT",
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
