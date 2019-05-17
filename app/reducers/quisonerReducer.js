import {
    QUISONER
} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    quisoner: [],
    q_user:[],
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case QUISONER.getAll:
            return{
                ...state,
                quisoner:action.payload.quisoner,
                q_user: action.payload.q_user,
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