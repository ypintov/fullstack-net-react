import { LOGIN_USER, LOGOUT_USER, CURRENT_USER } from '../actions/actionTypes';
import createReducer from './reducerUtils';

const initialState = {
    currentUser: null
}

const loginUser = (state, payload) => {
    return {
        currentUser: payload.currentUser
    }
}

const setCurrentUser = (state, payload) => {
    return {
        currentUser: payload.currentUser
    }
}

const sigOutUser = () => {
    return { currentUser: null }
}

export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [LOGOUT_USER]: sigOutUser,
    [CURRENT_USER]: setCurrentUser
})