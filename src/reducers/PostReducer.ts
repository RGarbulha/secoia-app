import {
  Post,
  PostDispatchTypes,
  POSTS_FAIL,
  POSTS_SUCCESS,
  FETCH_POSTS,
} from "../actions/PostActionsTypes";

interface InitialStateI {
  loading: boolean;
  post?: Post;
}

const initialState: InitialStateI = {
  loading: false,
};

const PostReducer = (
  state: InitialStateI = initialState,
  action: PostDispatchTypes
): InitialStateI => {
  switch (action.type) {
    case POSTS_FAIL:
      return {
        loading: false,
      };
    case FETCH_POSTS:
      return {
        loading: true,
      };
    case POSTS_SUCCESS:
      return {
        loading: false,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
