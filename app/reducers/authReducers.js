import {
    AUTH
} from '../actions/types';
import isEmpty from '../lib/is-empty';
const initialState = {
    isAuthenticated: false,
    admin: {},
    loading: false,
};

export default function (state = initialState, action) {
 
    switch (action.type) {
        case AUTH.login:
            return {
                ...state,
                admin:action.payload,
                isAuthenticated: !isEmpty(action.payload),
                loading: false
            }
        case AUTH.loading:
            return{
                ...state,
                loading:true
            }

        default:
            return state;
    }
}