import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Table } from '@app/components'

import { tasksSelector } from './selectors'
import { getTasks } from './actions'

export const TasksPage = (): JSX.Element => {
  const tasks = useSelector(tasksSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    getTasks(dispatch)
  }, [])

  return <Table tasks={tasks} />
}
