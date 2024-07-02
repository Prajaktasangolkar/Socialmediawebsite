import * as  UserApi from '../API/UserRequest.js'
export const UPDATING_START='UPDATING_START'
export const UPDATING_SUCCESS='UPDATING_SUCCESS'
export const UPDATING_FAIL='UPDATING_FAIL'

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
        paload:error
    }
}



export const updateUser=(id,formData)=>async(dispatch)=>{
    dispatch(updatingStart())
    try {
       const {data}=  await UserApi.updateUser(id,formData);
       dispatch(updatingSuccess(data))
    } catch (error) {
        console.log(error);
        dispatch(updatingFail(error))
    }
}