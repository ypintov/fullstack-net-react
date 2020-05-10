import { toast } from 'react-toastify'
import * as actionTypes from './actionTypes'
import AuthService from '../../api/authService'
import { closeModal } from './modalActions'
import history from '../../..'

const loginUser = (currentUser) => {
    return { type: actionTypes.LOGIN_USER, payload: { currentUser } }
}

export const setCurrentUser = (currentUser) => {
    return { type: actionTypes.CURRENT_USER, payload: { currentUser } }
}

const signOutUser = () => {
    return { type: actionTypes.LOGOUT_USER }
}

export const register = (credentials) => async (dispatch) => {
    try {
        const user = await AuthService.register(credentials)
        dispatch(setCurrentUser(user))
        dispatch(closeModal())
        history.push('/recipes')
    } catch (error) {
        throw error
    }
}

export const login = (credentials) => async (dispatch) => {
    try {
        const user = await AuthService.login(credentials)
        dispatch(loginUser(user))
        dispatch(closeModal())
        toast.success('Welcome to the Cookbook')
        history.push('/recipes')
    } catch (error) {
        throw error
    }
}

export const getUser = () => async (dispatch) => {
    try {
        const user = await AuthService.currentUser()
        dispatch(setCurrentUser(user))
    } catch (error) {
        toast.error(error)
    }
}

export const logout = () => (dispatch) => {
    try {
        AuthService.logout()
        dispatch(signOutUser())
        history.push('/')
    } catch (error) {
        toast.error(error)
    }
}
