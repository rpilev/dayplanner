import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { App } from './app'
import { reducer as tasksReducer } from './pages/tasks/store'

const middleware = [...getDefaultMiddleware(), logger]
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
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
