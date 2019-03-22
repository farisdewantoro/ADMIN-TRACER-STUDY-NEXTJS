import {
    AUTH_SET_USER,
    LOADING_AUTH
} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    isAuthenticated: false,
    mahasiswa: {},
    loading: false,
};

export default function (state = initialState, action) {
 
    switch (action.type) {
        case AUTH_SET_USER:
            return {
                ...state,
                mahasiswa:action.payload,
                isAuthenticated: !isEmpty(action.payload),
                loading: false
            }
        case LOADING_AUTH:
            return{
                ...state,
                loading:true
            }

        default:
            return state;
    }
}