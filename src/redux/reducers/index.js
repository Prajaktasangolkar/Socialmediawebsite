import { combineReducers } from "redux";
import authReducer from './Authreducer.js'
import uploadReducer from "./UploadReducer.js";

export const reducer =combineReducers({authReducer,uploadReducer})