import { AUTH_SET_USER, LOADING_AUTH, GET_ERRORS,REMOVE_ERRORS} from './types';
import axios from 'axios';
import {setNotification} from './notifActions';

export const loadingAuth = ()=>{
    return{
        type: LOADING_AUTH
    }
}

export const submitLogin = (data) => disbatch =>{

    disbatch(loadingAuth());
    axios.post('/api/auth/login',data)
        .then(res=>{
            if(res.data.notification){
                disbatch(setNotification(res.data.notification));
            }
            console.log(res.data.data);
           disbatch({
               type:AUTH_SET_USER,
               payload:res.data.data
           });
        })
        .catch(err=>{
            if(err.response){
                disbatch({
                    type: GET_ERRORS,
                    payload:err.response.data
                })
            }
            let notification = {
                error: true,
                message: "There is an error !",
                notification: true
            }
            disbatch(setNotification(notification));
        });
}
