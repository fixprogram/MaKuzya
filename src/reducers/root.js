import { combineReducers } from "redux";
import user from "./user";
import lessons from "./lessons";
import practice from "./practice";

export default combineReducers({
  user,
  lessons,
  practice,
});
