import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { App } from './app'
import { reducer as taskReducer } from './pages/tasks/store'
import './cssReset.css'

const middleware = [...getDefaultMiddleware(), logger]
const store = configureStore({
  reducer: {
    task: taskReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

const render = () =>
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )

render()
