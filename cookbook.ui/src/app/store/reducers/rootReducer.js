import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    modals: modalReducer,
    auth: authReducer
})

export default rootReducer;