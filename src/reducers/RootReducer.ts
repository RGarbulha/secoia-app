import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import StudentReducer from "./StudentReducer";

const RootReducer = combineReducers({
  posts: PostReducer,
  students: StudentReducer,
});

export default RootReducer;
