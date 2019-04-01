import { FAKULTAS } from './types';
import axios from 'axios';
import { setNotification } from './notifActions';

export const loadingFakultas = () => {
    return {
        type: FAKULTAS.loading
    }
}


export const getAllFakultas= () => disbatch => {
    disbatch(loadingFakultas());
    axios.get('/api/fakultas/get-all')
        .then(res => {
            disbatch({
                type: FAKULTAS.getAll,
                payload: res.data
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