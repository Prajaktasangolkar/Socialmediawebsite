import { UPLOAD_START,UPLOAD_SUCCESS,UPLOAD_FAIL } from "../actions/uploadAction.js";

const initialState={
    posts:[],
    loading:false,
    error:false,
    uploading:false
}

const uploadReducer=(state=initialState,action)=>{
    switch(action.type){
        case UPLOAD_START:
            return {
                ...state,
                loading:true,
                error:false,
                uploading:true
            }
        case UPLOAD_SUCCESS:
            console.log('...state.posts',action.data);
            return {
                ...state,
                loading:false,
                posts:[action.payload, ...state.posts],
                error:false,
                uploading:false
            }
        case UPLOAD_FAIL:
            return{
                ...state,
                loading:false,
                error:true,
                uploading:false
            }
        default :
            return state
        
    }
}

export default uploadReducer;

