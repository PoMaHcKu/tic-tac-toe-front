import axios from 'axios'

const request = axios.create({
        baseURL: 'https://api-cross-app.herokuapp.com/',
        timeout: 10000,
    }
)

export default request