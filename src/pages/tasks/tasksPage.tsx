import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TasksTable } from './features'

import { loadingSelector, tasksSelector } from './selectors'
import { getTasksList} from './store'

export const TasksPage = (): JSX.Element => {
  const tasks = useSelector(tasksSelector)
  const loading = useSelector(loadingSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksList())
  }, [])

  return <TasksTable isLoading={loading} tasks={tasks} />
}
