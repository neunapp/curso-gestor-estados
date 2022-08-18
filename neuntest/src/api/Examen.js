// services for user api
import axios from 'axios'

var instance = axios.create({
  baseURL: 'https://servicios.neunapp.com',
  timeout: 3000
})

export function apiListQuestions() {
  // consulta al servidor
  return instance.get('/api/test/category/list/?category=javascript')
}