/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TaskInterfaces } from '@app/typescript/interfaces'

export const { reducer, actions } = createSlice({
  name: 'tasks',
  initialState: {
    list: [
      {
        id: 1,
        name: 'TaskInterface 1',
        description: 'Something to do',
        done: true,
      },
      {
        id: 2,
        name: 'TaskInterface 2',
        description: 'Some things to settle...',
        done: true,
      },
      {
        id: 3,
        name: 'TaskInterface 3',
        description: 'Nothing',
        done: false,
      },
    ],
  },
  reducers: {
    setTasksList: (state, { payload }: PayloadAction<[TaskInterfaces.Task]>) => {
      state.list = payload
    },
  },
})
