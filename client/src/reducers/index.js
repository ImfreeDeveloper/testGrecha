import { combineReducers } from 'redux'

import newsReducers from './news'

const rootReducers = combineReducers({
	news: newsReducers
})

export default rootReducers