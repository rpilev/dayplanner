import React from 'react'
import { render } from '@testing-library/react'

import { TaskInterfaces } from '@app/typescript/interfaces'

import { TasksTable } from '../tasksTable'

let tasks: TaskInterfaces.Task[]

beforeEach(() => {
  tasks = [
    {
      id: 1,
      name: 'name value 1',
      description: 'description value 1',
      done: true,
    },
    {
      id: 2,
      name: 'name value 2',
      description: 'description value 2',
      done: true,
    },
    {
      id: 3,
      name: 'name value 3',
      description: 'description value 3',
      done: false,
    },
  ]
})

describe('Table', () => {
  test('should render correctly', () => {
    const IconRender = render(<TasksTable tasks={tasks} />)

    expect(IconRender).toBeDefined()
    expect(IconRender).toMatchSnapshot()
  })
})
