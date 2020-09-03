import React from 'react'

import { Types } from '@typescript/types'

export const Table = ({ tasks }: Types.TaskTable): JSX.Element => (
  <table>
    <tbody>
      <tr>
        <td>Name:</td>
        <td>Description</td>
        <td>Done</td>
      </tr>
      {tasks.map(({ name, description, isDone }) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{description}</td>
          <td>{isDone}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
