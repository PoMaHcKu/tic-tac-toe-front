import axios from 'axios'

const request = axios.create({
        baseURL: 'https://api-cross-app.herokuapp.com/',
        timeout: 10000,
    }
)

export default request
export function setToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer_${token}`
    } else {
        axios.defaults.headers.common['Authorization'] = null
    }
}
