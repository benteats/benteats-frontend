import axios from 'axios'
import { URL_AZURE } from '../constants/http.azure.request'

export default axios.create({
    baseURL: URL_AZURE
});

export const axiosPrivate = axios.create({
  baseURL: URL_AZURE,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null
    }`,
  }
})
