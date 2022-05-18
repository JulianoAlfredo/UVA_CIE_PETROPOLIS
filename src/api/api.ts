import axios from 'axios'

const API = axios.create({
    baseURL: 'https://backend-resgatropolis.herokuapp.com/'
})

export default API  