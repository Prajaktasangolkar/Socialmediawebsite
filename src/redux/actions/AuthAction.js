import * as AuthAPI from '../API/AuthRequest.js'
export const AUTH_START='AUTH_START'
export const AUTH_SUCCESS='AUTH_SUCCESS'
export const AUTH_FAIL='AUTH_FAIL'
export const LOG_OUT='LOG_OUT'
// import { useNavigate } from "react-router-dom";

// const navigate=useNavigate()
export const authStart=()=>{
    return {
        type:AUTH_START
    }
}
export const authSuccess=(data)=>{
    return {
        type:AUTH_SUCCESS,
        payload:data
    }
}
export const authFail=(error)=>{
    return {
        type:AUTH_FAIL,
        payload:error
    }
}
export const authLogout=()=>{
    return {
        type:LOG_OUT,
        
    }
}
export const LogIn=(formData,navigate)=>async(dispatch)=>{
       dispatch(authStart());
       try {
          const {data} =await AuthAPI.logIn(formData);
          dispatch(authSuccess(data))
          navigate('../home',{replace:true})
       } catch (error) {
          console.log(error);
          dispatch(authFail(error))
       }
}

export const SignUp=(formData,navigate)=>async(dispatch)=>{
    dispatch(authStart());
    try {
       const {data} =await AuthAPI.signUp(formData);
       dispatch(authSuccess(data))
       navigate('../home',{replace:true})
    } catch (error) {
       console.log(error);
       dispatch(authFail(error))
    }
}

export const logOut=(navigate)=>async(dispatch)=>{
    dispatch(authLogout());
    navigate('/auth',{replace:true})
    
}