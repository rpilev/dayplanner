import React from 'react'
import { render } from '@testing-library/react'

import { Table } from '@app/components'

interface Task {
  id: number
  column1: string
  column2: string
}

let tasks: Task[]

beforeEach(() => {
  tasks = [
    {
      id: 1,
      column1: 'column1 value 1',
      column2: 'column2 value 1',
    },
    {
      id: 2,
      column1: 'column1 value 2',
      column2: 'column2 value 2',
    },
    {
      id: 3,
      column1: 'column1 value 3',
      column2: 'column2 value 3',
    },
  ]
})

describe('Table', () => {
  test('should render correctly', () => {
    const IconRender = render(
      <Table.Table>
        <thead>
          <tr>
            <Table.Th>Title 1</Table.Th>
            <Table.Th>Title 2</Table.Th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(({ id, column1, column2 }) => (
            <tr key={id}>
              <Table.Td>{column1}</Table.Td>
              <Table.Td>{column2}</Table.Td>
            </tr>
          ))}
        </tbody>
      </Table.Table>,
    )

    expect(IconRender).toBeDefined()
    expect(IconRender).toMatchSnapshot()
  })
})
