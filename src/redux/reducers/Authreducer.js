import { AUTH_START,AUTH_SUCCESS,AUTH_FAIL } from "../actions/AuthAction.js";

const initialState={
    data:[],
    loading:false,
    error:null
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case AUTH_START:
            return {
                ...state,
                loading:true,
                error:null
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        case AUTH_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default :
            return state
        
    }
}

export default authReducer;