import vanillaAxios from 'axios'

import env from '../constants/env'

const axios = vanillaAxios.create({
  baseURL: env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default axios
