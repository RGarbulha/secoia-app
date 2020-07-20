export const FETCH_POSTS = "FETCH_POSTS";
export const POSTS_FAIL = "POSTS_FAIL";
export const POSTS_SUCCESS = "POSTS_SUCCESS";

export type Post = {
  id: string;
  title: string;
  body: string;
};

interface FetchPost {
  type: typeof FETCH_POSTS;
}

interface PostFail {
  type: typeof POSTS_FAIL;
}

interface PostSuccess {
  type: typeof POSTS_SUCCESS;
  payload: Post;
}

export type PostDispatchTypes = FetchPost | PostFail | PostSuccess;
