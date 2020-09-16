import axios from 'axios'

const host = 'http://localhost:5000/api'

export const fetchNews = async () => {
  return axios.get(`${host}/news`)
}

export const fetchNew = async (id) => {
  return axios.get(`${host}/news/${id}`)
}

export const fetchUser = async (id) => {
  return axios.get(`${host}/user/${id}`)
}

export const fetchComments = async (id) => {
  return axios.get(`${host}/comments/${id}`)
}