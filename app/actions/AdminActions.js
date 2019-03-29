import { ADMIN, GET_ERRORS, REMOVE_ERRORS } from './types';
import axios from 'axios';
import { setNotification } from './notifActions';
import Router from 'next/router';
export const loadingAdmin = () => {
    return {
        type: ADMIN.loading
    }
}

export const createAdmin = (data) => disbatch => {
    disbatch(loadingAdmin());
    axios.post('/api/admin/create-admin', data)
        .then(res => {
            if (res.data.notification) {
                disbatch(setNotification(res.data.notification));
            }
            Router.push('/data-admin-jurusan');
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


