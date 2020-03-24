import axios from "axios"
import { toast } from 'react-toastify'
import history from "../..";

const http = axios.create({
    baseURL: 'http://localhost:5000/api'
});

http.interceptors.response.use(undefined, (error) => {

    if (error.message === 'Network Error' && !error.response) {
        toast.error('Network error - make sure the API server is running')
    }

    const { status, data, config } = error.response

    if (status === 404) {
        history.push('/notFound')
    }

    // eslint-disable-next-line no-prototype-builtins
    if (status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id')) {
        history.push('/notFound')
    }

    if (status === 500) {
        toast.error('Server error - check the terminal for more info!')
    }

    throw error.response
})

const responseBody = response => response.data;

const request = {
    get: url => http.get(url).then(responseBody),
    post: (url, body) => http.post(url, body).then(responseBody),
    put: (url, body) => http.put(url, body).then(responseBody),
    delete: url => http.delete(url).then(responseBody)

};

export default {
    request
}