// import axios from 'axios';
import { SET_NOTIFICATION, CLEAR_NOTIFICATION} from './types';


export const setNotification =(data)=>{
    return{
        type:SET_NOTIFICATION,
        payload:data
    }
}

export const clearNotification = ()=>{
    return {
        type:CLEAR_NOTIFICATION
    } 
}