import axios from 'axios'
import {LOGIN_USER,REGISTER_USER,AUTH_USER, LOGOUT_USER} from './types'
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
    const request = axios.get(`${USER_SERVER}/mypage`)
    .then(response => response.data)
    return{
        type: AUTH_USER,
        payload: request
    }
}

export const logoutUser=()=>{
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}
