/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getTasks } from './api'
import { TaskState } from '../../typescript/interfaces/task.interfaces'

export const getTasksList = createAsyncThunk('task/getTasksList', getTasks)

const initialState: TaskState = {
  list: [],
  loading: false,
}

export const { reducer } = createSlice({
  reducers: {},
  name: 'task',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTasksList.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getTasksList.fulfilled, (state, { payload: { content } }) => {
      state.list = content
      state.loading = false
    })
  },
})
