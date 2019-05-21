import { combineReducers } from "redux";
import todos from "./todos";
import goals from "./goals";

export default combineReducers({
  todos,
  goals
});
