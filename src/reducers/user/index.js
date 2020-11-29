const arr = new Array(15).fill(0);

const initialState = {
  activeSubject: "Algebra",
  chapter: 0,
  avatar: "",
  createdAt: "",
  everydayProgress: 0,
  lingots: 10,
  name: "",
  progress: {
    algebra: {
      0: arr.map((it) => it),
    },
    geometria: {
      0: arr.map((it) => it),
    },
  },
  streak: 0,
  uid: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "CHANGE_ACTIVE_SUBJECT":
      return { ...state, activeSubject: action.payload };
    case "SET_CHAPTER":
      return { ...state, chapter: action.payload };
    default:
      return state;
  }
}
