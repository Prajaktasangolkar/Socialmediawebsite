import * as  postApi from '../API/PostRequest.js'
export const RETREIVING_START='RETREIVING_START'
export const RETREIVING_SUCCESS='RETREIVING_SUCCESS'
export const RETREIVING_FAIL='RETREIVING_FAIL'

export const retreivingStart=()=>{
    return {
        type:RETREIVING_START
    }
}
export const retreivingSuccess=(data)=>{
    return {
        type:RETREIVING_SUCCESS,
        payload:data
    }
}

export const retreivingFail=(error)=>{
    return {
        type:RETREIVING_FAIL,
        paload:error
    }
}


export const getTimeLinePosts = (id) => async (dispatch) => {
    dispatch(retreivingStart());
    try {
      const { data } = await postApi.getTimelinePosts(id);
      dispatch(retreivingSuccess(data));
    } catch (error) {
      console.log("Error fetching timeline posts:", error);
      dispatch(retreivingFail(error));
    }
  };