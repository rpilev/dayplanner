import { createSelector } from '@reduxjs/toolkit'

import { Interfaces } from '@typescript/interfaces'

const rootSelector = createSelector(
  ({ tasks }: Interfaces.RootState) => tasks,
  (tasks) => tasks,
)

export const tasksSelector = createSelector(rootSelector, ({ list }) => list)
