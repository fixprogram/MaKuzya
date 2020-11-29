export default {
  setUser: (payload) => ({
    type: "SET_USER",
    payload,
  }),
  changeActive: (payload) => ({
    type: "CHANGE_ACTIVE_SUBJECT",
    payload,
  }),
  setChapter: (payload) => ({
    type: "SET_CHAPTER",
    payload,
  }),
};
