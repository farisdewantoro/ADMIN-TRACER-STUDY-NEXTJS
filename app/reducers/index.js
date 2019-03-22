import {combineReducers} from 'redux';
import authReducers from './authReducers';
import errorReducer from './errorReducer';
import notifReducer from './notifReducer';
export default combineReducers({
    auths: authReducers,
    errors: errorReducer,
    notifications: notifReducer
});