import {
  UPLOAD_START,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
  LIKE_USER,
  DISLIKE_USER,
  GET_USER_SUCCESS
} from "../actions/uploadAction.js";

const initialState = {
  user:{},
  posts: [],
  loading: false,
  error: false,
  uploading: false,
};

const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_START:
      return {
        ...state,
        loading: true,
        error: false,
        uploading: true,
      };
    case GET_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
    case UPLOAD_SUCCESS:
      console.log("...state.posts update success reducer", action.data);
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts],
        error: false,
        uploading: false,
      };
    case UPLOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        uploading: false,
      };
    case LIKE_USER:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? { ...post, likes: [...post.likes, action.payload.userId] }
            : post
        ),
      };
    case DISLIKE_USER:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? {
                ...post,
                likes: post.likes.filter(
                  (userId) => userId !== action.payload.userId
                ),
              }
            : post
        ),
      };
    default:
      return state;
  }
};

export default uploadReducer;
