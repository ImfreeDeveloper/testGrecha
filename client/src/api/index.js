import axios from 'axios'

const host = 'http://localhost:5000/api'

export const fetchNews = async () => {
  return axios.get(`${host}/news`)
}