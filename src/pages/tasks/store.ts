/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TaskInterfaces } from '@app/typescript/interfaces'

export const { reducer, actions } = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
  },
  reducers: {
    setTasksList: (state, { payload }: PayloadAction<[TaskInterfaces.Task]>) => {
      state.list = payload
    },
  },
})
