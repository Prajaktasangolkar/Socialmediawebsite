import * as  UploadApi from '../API/UploadRequest.js'
import { getUserApi } from "../API/UserRequest.js";

export const UPLOAD_START='UPLOAD_START'
export const UPLOAD_SUCCESS='UPLOAD_SUCCESS'
export const UPLOAD_FAIL='UPLOAD_FAIL'
export const LIKE_USER='LIKE_USER'
export const DISLIKE_USER='DISLIKE_USER'
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const uploadStart=()=>{
    return {
        type:UPLOAD_START
    }
}
export const uploadSuccess=(data)=>{
    return {
        type:UPLOAD_SUCCESS,
        payload:data
    }
}

export const uploadFail=(error)=>{
    return {
        type:UPLOAD_FAIL,
        paload:error
    }
}


export const uploadImage=(data)=>async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error);
    }
}

export const likeUsers=(postId,userId)=>{
    return {
        type:"LIKE_USER",
        payload:{ postId, userId },
    }
}
export const dislikeUsers=(postId,userId)=>{
    return {
        type:"DISLIKE_USER",
        payload:{ postId, userId },
    }
}
export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload: user,
  });
  

export const uploadPost=(data)=>async(dispatch)=>{
    dispatch(uploadStart())
    try {
       const newPost=  await UploadApi.uploadPost(data);
       dispatch(uploadSuccess(newPost.data))
    } catch (error) {
        console.log(error);
        dispatch(uploadFail(error))
    }
}


export const likeUser=(postId, userId)=>async(dispatch)=>{
   try {
    await UploadApi.likeUser(postId, userId)
    dispatch(likeUsers(postId, userId))
   } catch (error) {
    console.log(error);
   }
}

export const dislikeUser=(postId, userId)=>async(dispatch)=>{
   try {
    await UploadApi.dislikeUser(postId, userId)
    dispatch(dislikeUsers(postId, userId))
   } catch (error) {
    console.log(error);
   }
}


export const getUserData = (id) => async (dispatch) => {
    try {
      const response = await getUserApi(id);
      dispatch(getUserSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  