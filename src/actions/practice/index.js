export default {
  setTask: (payload) => ({
    type: "SET_TASK",
    payload,
  }),
  resetPracticeProgress: () => ({
    type: "RESET_PRACTICE_PROGRESS",
  }),
  setPracticePopupMessage: (payload) => ({
    type: "SET_PRACTICE_POPUP_MESSAGE",
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
