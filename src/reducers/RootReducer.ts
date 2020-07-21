import { combineReducers } from "redux";
import PostReducer from "./PostReducer";

const RootReducer = combineReducers({ posts: PostReducer });

export default RootReducer;
