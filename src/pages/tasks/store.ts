/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Interfaces } from '@typescript/interfaces'

export const { reducer, actions } = createSlice({
  name: 'tasks',
  initialState: {
    list: [
      {
        name: 'TaskInterface 1',
        description: 'Something to do',
        isDone: true,
      },
      {
        name: 'TaskInterface 2',
        description: 'Some things to settle...',
        isDone: true,
      },
      {
        name: 'TaskInterface 3',
        description: 'Nothing',
        isDone: false,
      },
    ],
  },
  reducers: {
    setTasksList: (state, { payload }: PayloadAction<[Interfaces.Task]>) => {
      state.list = payload
    },
  },
})
