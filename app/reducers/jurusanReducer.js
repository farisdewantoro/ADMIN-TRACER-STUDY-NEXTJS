import {JURUSAN} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    jurusan: [],
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case JURUSAN.getAll:
            return {
                ...state,
                jurusan: action.payload,
                loading:false
            }
        case JURUSAN.loading:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}