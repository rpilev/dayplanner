import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TasksTable } from './features'

import { tasksSelector } from './selectors'
import { getTasks } from './actions'

export const TasksPage = (): JSX.Element => {
  const tasks = useSelector(tasksSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    getTasks(dispatch)
  }, [])

  return <TasksTable tasks={tasks} />
}
