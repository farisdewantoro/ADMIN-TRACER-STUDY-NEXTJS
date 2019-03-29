import {
    ADMIN
} from '../actions/types';
const initialState = {
    admin:[],
    loading: false,
};

export default function (state = initialState, action) {
 
    switch (action.type) {
        case ADMIN.getAll:
            return {
                ...state,
                admin:action.payload,
                loading: false
            }
        case ADMIN.loading:
            return{
                ...state,
                loading:true
            }

        default:
            return state;
    }
}