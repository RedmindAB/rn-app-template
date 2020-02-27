import vanillaAxios from 'axios'
import env from '../config/env'

const axios = vanillaAxios.create({
  baseURL: env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default axios
