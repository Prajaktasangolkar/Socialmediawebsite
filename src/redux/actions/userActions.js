import * as  UserApi from '../API/UserRequest.js'
export const UPDATING_START='UPDATING_START'
export const UPDATING_SUCCESS='UPDATING_SUCCESS'
export const UPDATING_FAIL='UPDATING_FAIL'
export const FOLLOW_USER='FOLLOW_USER'
export const UNFOLLOW_USER='UNFOLLOW_USER'

export const updatingStart=()=>{
    return {
        type:UPDATING_START
    }
}
export const updatingSuccess=(data)=>{
    return {
        type:UPDATING_SUCCESS,
        payload:data
    }
}

export const updatingFail=(error)=>{
    return {
        type:UPDATING_FAIL,
        payload:error
    }
}

export const followUsers=(userId)=>{
    return {
        type:"FOLLOW_USER",
        payload:userId,
    }
}
export const unfollowUsers=(userId)=>{
    return {
        type:"UNFOLLOW_USER",
        payload:userId,
    }
}


export const updateUser=(id,formData)=>async(dispatch)=>{
    dispatch(updatingStart())
    try {
       const {data}=  await UserApi.updateUser(id,formData);
       dispatch(updatingSuccess(data))
       console.log('dattttaaa',data);
    } catch (error) {
        console.log("error",error);
        dispatch(updatingFail(error))
    }
}

export const followUser=(id,data)=>async(dispatch)=>{
    dispatch(followUsers(id))
   UserApi.followUser(id,data)
}

export const unfollowUser=(id,data)=>async(dispatch)=>{
    dispatch(unfollowUsers(id))
   UserApi.unfollowUser(id,data)
}



