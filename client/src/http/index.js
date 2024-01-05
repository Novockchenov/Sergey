import axios from "axios"

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authhost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authIntercepter = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authhost.interceptors.request.use(authIntercepter)

export {
    $host,
    $authhost
}