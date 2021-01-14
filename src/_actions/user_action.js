import axios from 'axios'
import {LOGIN_USER,REGISTER_USER,AUTH_USER, LOGOUT_USER,NAME_USER,PASSWORD_USER,DELETE_TEST} from './types'
import { USER_SERVER } from '../components/config';


export const loginUser=(dataToSubmit)=>{
    const request = axios.post(`${USER_SERVER}/signin`,dataToSubmit)
    .then(response => response.data)
    return{
        type: LOGIN_USER,
        payload: request
    }
}

export const registerUser=(dataToSubmit)=>{
   
    const request = axios.post(`${USER_SERVER}/signup`,dataToSubmit)
    .then(response => response.data)

    return{
        type: REGISTER_USER,
        payload: request
    }
}



export const auth=()=>{
    const request = axios.get(`${USER_SERVER}/mypage`, {
        headers: {
          jwt: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: AUTH_USER,
        payload: request
    }
}

export const changeName=(dataToSubmit)=>{
    const request = axios.put(`${USER_SERVER}/nickname`,dataToSubmit, {
        headers: {
          jwt: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: NAME_USER,
        payload: request
    }
}

export const changePassword=(dataToSubmit)=>{
    const request = axios.put(`${USER_SERVER}/password`,dataToSubmit, {
        headers: {
          jwt: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: PASSWORD_USER,
        payload: request
    }
}

export const deleteTest=(id)=>{
    const request = axios.delete(`http://3.35.187.65:3000/test/${id}`, {
        headers: {
          jwt: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: DELETE_TEST,
        payload: request
    }
}

export const logoutUser=()=>{
    return {
        type: LOGOUT_USER,
        payload: null
    }
}
