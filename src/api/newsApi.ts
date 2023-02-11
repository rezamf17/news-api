import api from './axios'

export default {
    getNews(q:string, date:string, sortBy:string, apiKey:string) {
        return api.get(`?q=${q}&from=${date}sortBy=${sortBy}&apiKey=${apiKey}`);
      }

}