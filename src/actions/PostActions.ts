import { Dispatch } from "redux";
import {
  PostDispatchTypes,
  FETCH_POSTS,
  POSTS_FAIL,
  POSTS_SUCCESS,
} from "./PostActionsTypes";
import axios from "axios";

export const GetPost = () => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    dispatch({
      type: FETCH_POSTS,
    });

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    dispatch({
      type: POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POSTS_FAIL,
    });
  }
};
