import {
 LOADING_MAHASISWA
} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    mahasiswa:[],
    loading:false
};

export default function (state = initialState, action) {
 
    switch (action.type) {
        case LOADING_MAHASISWA:
            return {
                ...state,
                mahasiswa:action.payload
            }
        case LOADING_MAHASISWA:
            return{
                ...state,
                loading:true
            }

        default:
            return state;
    }
}