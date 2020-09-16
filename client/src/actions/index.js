import { SET_NEWS } from '../actions/actionTypes'
import {
  fetchNews as fetchNewsApi,
} from '../api'

export const fetchNews = () => async dispatch => {
  // dispatch({
  //   type: FETCH_PHONES_START
  // })

  try {
    const data = await fetchNewsApi()
    dispatch({
      type: SET_NEWS,
      payload: data.data.news
    })

  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: FETCH_PHONES_FAILURE,
    //   payload: err,
    //   error: true
    // })
  }

}