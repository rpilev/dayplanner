import React from 'react'
import TruncateMarkup from 'react-truncate-markup'

import { TaskInterfaces } from '@app/typescript/interfaces'
import { Table, Icon } from '@app/components'

export const TasksTable = ({ tasks }: TaskInterfaces.Table): JSX.Element => (
  <Table.Table>
    <thead>
      <tr>
        <Table.Th>Name:</Table.Th>
        <Table.Th>Description</Table.Th>
        <Table.Th tiny>Done</Table.Th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(({ name, description, done, id }) => (
        <tr key={id}>
          <Table.Td fixedWidth={100}>{name}</Table.Td>
          <Table.Td multiLine>
            <TruncateMarkup lines={3}>
              <p>{description}</p>
            </TruncateMarkup>
          </Table.Td>
          <Table.Td center>{done && <Icon.Icon name="green-check" size="sm" />}</Table.Td>
        </tr>
      ))}
    </tbody>
  </Table.Table>
)
