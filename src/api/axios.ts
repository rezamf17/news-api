import axios from 'axios'

const api = axios.create({ baseURL : "https://newsapi.org/v2/everything"})

export default api