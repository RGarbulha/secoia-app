import { combineReducers } from "redux";
import StudentReducer from "./StudentReducer";

const RootReducer = combineReducers({
  students: StudentReducer,
});

export default RootReducer;
