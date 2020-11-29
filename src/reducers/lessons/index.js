const initialState = {
  lessons: [
    {
      title: "",
      chapter: 0,
    },
  ],
  subjects: ["Algebra", "Geometria"],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_LESSONS":
      return { ...state, lessons: action.payload };
    case "SET_SUBJECTS":
      return { ...state, subjects: action.payload };
    default:
      return state;
  }
}
