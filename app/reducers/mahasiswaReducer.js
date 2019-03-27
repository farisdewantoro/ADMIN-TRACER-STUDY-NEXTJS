import {
 MAHASISWA
} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    mahasiswa:[],
    edit:null,
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