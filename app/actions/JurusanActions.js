import {JURUSAN} from './types';
import axios from 'axios';
import { setNotification } from './notifActions';

export const loadingJurusan = () =>{
    return{
        type:JURUSAN.loading
    }
}


export const getAllJurusan = (data)=>disbatch=>{
    disbatch(loadingJurusan());
    axios.get('/api/jurusan/get-all')
        .then(res=>{
            disbatch({
                type:JURUSAN.getAll,
                payload:res.data
            })
        })
        .catch(err => {
            if (err.response) {
                disbatch({
                    type: GET_ERRORS,
                    payload: err.response.data
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