import {
    GET_ERRORS,
    REMOVE_ERRORS,
    MAHASISWA
} from './types';
import { setNotification } from './notifActions';
import axios from 'axios';

export const loadingMahasiswa = () => {
    return {
        type: MAHASISWA.loading
    }
}

export const deleteMahasiswa = (d)=>disbatch=>{
    disbatch(loadingMahasiswa());
    axios.delete('/api/mahasiswa/delete', { data:{mahasiswa_id:d}})
        .then(res=>{
            disbatch({
                type: MAHASISWA.getAll,
                payload: res.data
            });
            let notification = {
                error: false,
                message: "Success !",
                notification: true
            }
            disbatch(setNotification(notification));
        })
        .catch(err => {
            let notification = {
                error: true,
                message: "Error !",
                notification: true
            }
            disbatch(setNotification(notification));
        });
}

export const getAllMahasiswa = ()=>disbatch=>{
    disbatch(loadingMahasiswa());
    axios.get('/api/mahasiswa/get-all')
        .then(res=>{
            disbatch({
                type:MAHASISWA.getAll,
                payload:res.data
            })
        })
        .catch(err => {
            let notification = {
                error: true,
                message: "Error !",
                notification: true
            }
            disbatch(setNotification(notification));
        });
}

export const updateMahasiswa = (data,nrp)=>disbatch=>{
    disbatch(loadingMahasiswa());
    axios.put('/api/mahasiswa/update/'+nrp, data)
        .then(res => {

            let notification = {
                error: false,
                message: "Success !",
                notification: true
            }
            disbatch(setNotification(notification));
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
                message: "Error !",
                notification: true
            }
            disbatch(setNotification(notification));
        });
}

export const editMahasiswa = (nrp) =>disbatch=>{
    disbatch(loadingMahasiswa());
    axios.get('/api/mahasiswa/get/'+nrp)
        .then(res => {
            disbatch({
                type: MAHASISWA.edit,
                payload: res.data
            })
        })
        .catch(err => {
            let notification = {
                error: true,
                message: "Error !",
                notification: true
            }
            disbatch(setNotification(notification));
        });
}

export const createMahasiswa = (data) => disbatch => {

    disbatch(loadingMahasiswa());
    axios.post('/api/mahasiswa/create', data)
        .then(res => {
       
            let notification = {
                error: false,
                message: "Success !",
                notification: true
            }
            disbatch(setNotification(notification));
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
                message: "Error !",
                notification: true
            }
            disbatch(setNotification(notification));
        });
}
