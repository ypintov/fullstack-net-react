import request from './http'
import { AUTH_ENDPOINT } from '../infrastructure/appConstants'
import { setToken, removeToken } from '../config/auth/credentialConfiguration'

const AuthService = {
    login: async (credentials) => {
        try {
            const response = await request.post(`${AUTH_ENDPOINT}/login`, credentials)
            if (response) setToken(response.token)
            return response
        } catch (error) {
            throw error
        }
    },
    register: async (credentials) => {
        try {
            const response = await request.post(`${AUTH_ENDPOINT}/register`, credentials)
            if (response) setToken(response.token)
            return response
        } catch (error) {
            throw error
        }
    },
    currentUser: () => request.get(AUTH_ENDPOINT),
    logout: () => removeToken()
}

export default AuthService
