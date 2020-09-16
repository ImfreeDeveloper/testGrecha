import { SET_NEWS, SET_LOADED } from '../actions/actionTypes'
import {
  fetchNews as fetchNewsApi,
} from '../api'

export const fetchNews = () => async dispatch => {
  dispatch({
    type: SET_LOADED,
    payload: false
  })

  try {
    const data = await fetchNewsApi()
    dispatch({
      type: SET_NEWS,
      payload: data.data.news
    })
    dispatch({
      type: SET_LOADED,
      payload: true
    })

  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_LOADED,
      payload: false
    })
  }

}