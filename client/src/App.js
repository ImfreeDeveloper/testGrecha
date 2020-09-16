import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Routes from './routes'
import TopBar from './components/topBar';

import './styles/main.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <TopBar />
          <Routes />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
