import { createSelector } from '@reduxjs/toolkit'

import { TaskInterfaces } from '@app/typescript/interfaces'

const rootSelector = createSelector(
  ({ task }: TaskInterfaces.RootState) => task,
  (task) => task,
)

export const tasksSelector = createSelector(rootSelector, ({ list }) => list)

export const loadingSelector = createSelector(rootSelector, ({ loading }) => loading)
