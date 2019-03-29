import {combineReducers} from 'redux';
import authReducers from './authReducers';
import errorReducer from './errorReducer';
import notifReducer from './notifReducer';
import mahasiswaReducer from './mahasiswaReducer';
import jurusanReducer from './jurusanReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    auths: authReducers,
    errors: errorReducer,
    notifications: notifReducer,
    mahasiswas: mahasiswaReducer,
    jurusans: jurusanReducer,
    admins: adminReducer
});