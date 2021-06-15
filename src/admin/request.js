import axios from 'axios'
import { store } from './store'

axios.defaults.baseURL = 'https://webdev-api.loftschool.com'

axios.defaults.headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
}

axios.interceptors.response.use(function(response) {
    return response
}, function(error) {
    if (error.response && error.response.data.error === 'token_expired') {
        return axios.post('/refreshToken').then(data => {
            localStorage.setItem('token', data.data.token)
            store.commit('setToken', localStorage.getItem('token'))
            axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            error.config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            console.log(error.config)
            return axios(error.config)
        })
    }
    return Promise.reject(error)
})

export default axios