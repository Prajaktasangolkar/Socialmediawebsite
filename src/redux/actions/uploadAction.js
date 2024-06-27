import * as  UploadApi from '../API/UploadRequest.js'
export const UPLOAD_START='UPLOAD_START'
export const UPLOAD_SUCCESS='UPLOAD_SUCCESS'
export const UPLOAD_FAIL='UPLOAD_FAIL'

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