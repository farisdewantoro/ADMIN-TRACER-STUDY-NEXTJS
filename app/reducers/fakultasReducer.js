import {FAKULTAS} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    fakultas: [],
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case FAKULTAS.getAll:
            return {
                ...state,
                fakultas: action.payload,
                loading:false
            }
        case FAKULTAS.loading:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}