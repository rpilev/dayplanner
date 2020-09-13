import { createSelector } from '@reduxjs/toolkit'

import { TaskInterfaces } from '@app/typescript/interfaces'

const rootSelector = createSelector(
  ({ tasks }: TaskInterfaces.RootState) => tasks,
  (tasks) => tasks,
)

export const tasksSelector = createSelector(rootSelector, ({ list }) => list)
