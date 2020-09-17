import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Profile from './pages/profile'
import News from './pages/news'
import New from './pages/new'
import Page404 from './pages/page404'

export default () => {
  return (
    <Switch>
      <Route path='/' component={News} exact />
      <Route path='/new/:slug' component={New} />
      <Route path='/profile/:slug' component={Profile} />
      <Route component={Page404} />
    </Switch>
  )
}
