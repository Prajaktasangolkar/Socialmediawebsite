import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOG_OUT,
} from "../actions/AuthAction.js";
import {
  UPDATING_START,
  UPDATING_SUCCESS,
  UPDATING_FAIL,
} from "../actions/userActions.js";

const initialState = {
  data: [],
  loading: false,
  error: null,
  updateLoading:true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATING_START:
      return {
        ...state,
        updateLoading: true,
        error: null,
      };
    case UPDATING_SUCCESS:
        localStorage.setItem("profile",JSON.stringify({...action?.data}))
      return {
        ...state,
        updateLoading: false,
        data: action.data,
      };
    case UPDATING_FAIL:
      return {
        ...state,
        updateLoading: false,
        error: action.payload,
      };

    case LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
