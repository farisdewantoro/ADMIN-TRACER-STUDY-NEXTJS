import { QUISONER, GET_ERRORS, REMOVE_ERRORS } from './types';
import axios from 'axios';
import { setNotification } from './notifActions';
import Router from 'next/router';
export const loadingQuisoner = () => {
    return {
        type: QUISONER.loading
    }
}
export const createQuisoner = (data) => disbatch => {
    disbatch(loadingQuisoner());
    axios.post('/api/quisoner/create', data)
        .then(res => {
            if (res.data.notification) {
                disbatch(setNotification(res.data.notification));
            }
            Router.push('/data-quisoner');
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



export const getAllQuisoner = () => disbatch => {
    disbatch(loadingQuisoner());
    axios.get('/api/quisoner/get-all')
        .then(res => {
            disbatch({
                type: QUISONER.getAll,
                payload: res.data
            })
        })
        .catch(err => {
            let notification = {
                error: true,
                message: "There is an error !",
                notification: true
            }
            disbatch(setNotification(notification));
        })
}



