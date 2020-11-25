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
};
