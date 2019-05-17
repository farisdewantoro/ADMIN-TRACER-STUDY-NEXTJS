import {
 MAHASISWA
} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    mahasiswa:[],
    edit:null,
    pekerjaan:[],
    prestasi:[],
    loading:false
};

export default function (state = initialState, action) {
 
    switch (action.type) {
        case MAHASISWA.getAll:
            return {
                ...state,
                loading: true,
                mahasiswa:action.payload
            }
        case MAHASISWA.getPekerjaan:
            return{
                ...state,
                loading:false,
                pekerjaan: action.payload
            }
        case MAHASISWA.getPrestasi:
            return{
                ...state,
                loading:false,
                prestasi:action.payload
            }
        case MAHASISWA.getAllPekerjaan:
            return{
                ...state,
                loading:true,
                pekerjaan:action.payload
            }
        case MAHASISWA.getAllPrestasi:
            return{
                ...state,
                loading:true,
                prestasi:action.payload
            }
        case MAHASISWA.edit:
            return{
                ...state,
                loading: true,
                edit: action.payload
            }
        case MAHASISWA.loading:
            return{
                ...state,
                loading:true
            }

        default:
            return state;
    }
}