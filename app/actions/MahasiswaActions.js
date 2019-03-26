import {
    GET_ERRORS,
    REMOVE_ERRORS,
    LOADING_MAHASISWA
} from './types';
import { setNotification } from './notifActions';
import axios from 'axios';

export const loadingMahasiswa = () => {
    return {
        type: LOADING_MAHASISWA
    }
}

export const createMahasiswa = (data) => disbatch => {

    disbatch(loadingMahasiswa());
    axios.post('/api/mahasiswa/create', data)
        .then(res => {
            if (res.data.notification) {
                disbatch(setNotification(res.data.notification));
            }
            console.log(res.data.data);
            // disbatch({
            //     type: AUTH_SET_USER,
            //     payload: res.data.data
            // });
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
