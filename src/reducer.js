const INCREASE_CROWNS = "INCREASE_CROWNS";
const INCREASE_STREAK = "INCREASE_STREAK";
const INCREASE_LINGOTS = "INCREASE_LINGOTS";

const actionCreator = {
  increaseCrowns: (count = 1) => {
    return {
      type: INCREASE_CROWNS,
      payload: count,
    };
  },
  increaseStreak: (count = 1) => {
    return {
      type: INCREASE_STREAK,
      payload: count,
    };
  },
  increaseLingots: (count) => {
    return {
      type: INCREASE_LINGOTS,
      payload: count,
    };
  },

  changePage: (page, title = ``) => {
    return {
      type: "CHANGE_PAGE",
      payload: { page, title },
    };
  },
};

const initialState = {
  crowns: 0,
  streak: 0,
  lingots: 10,
  page: 0,
  title: ``,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_CROWNS:
      return Object.assign({}, state, {
        crowns: state.crowns + action.payload,
      });
    case INCREASE_STREAK:
      return Object.assign({}, state, {
        streak: state.streak + action.payload,
      });
    case INCREASE_LINGOTS:
      return Object.assign({}, state, {
        lingots: state.lingots + action.payload,
      });
    case "CHANGE_PAGE":
      return Object.assign({}, state, {
        page: action.payload.page,
        title: action.payload.title,
      });
    default:
      return state;
  }
};

export { actionCreator, reducer };
