import axios from 'axios'
import { URL_AZURE } from '../constants/http.azure.request'

export const api = axios.create({
    baseURL: URL_AZURE
})
