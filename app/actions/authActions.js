import { AUTH, GET_ERRORS,REMOVE_ERRORS} from './types';
import axios from 'axios';
import {setNotification} from './notifActions';

export const loadingAuth = ()=>{
    return{
        type: AUTH.loading
    }
}

export const submitLogin = (data) => disbatch =>{

    disbatch(loadingAuth());
    axios.post('/api/auth/login',data)
        .then(res=>{
            if(res.data.notification){
                disbatch(setNotification(res.data.notification));
            }
           disbatch({
               type:AUTH.login,
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
