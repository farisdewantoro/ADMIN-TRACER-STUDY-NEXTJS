import {
    QUISONER
} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    quisoner: [],
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case QUISONER.getAll:
            return{
                ...state,
                quisoner:action.payload.quisoner,
                loading:false
            }
        case QUISONER.loading:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}