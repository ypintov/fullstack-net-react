import axios from "axios"

const http = axios.create({
    baseURL: 'http://localhost:5000/api'
});

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