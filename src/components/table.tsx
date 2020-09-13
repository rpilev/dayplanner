import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { TaskInterfaces } from '@app/typescript/interfaces'

const TableWrapper = styled.table`
  width: 100%;
  height: 100%;

  border-collapse: collapse;

  & > thead {
    font-size: 18px;
    color: #fff;
    text-align: left;
    border: 1px solid #000;

    & > tr {
      background: linear-gradient(0deg, rgba(22, 22, 22, 1) 0%, rgba(0, 0, 0, 1) 100%);
    }

    & > tr > th {
      padding: 15px 25px;
    }
  }

  & > tbody {
    color: #8c92a2;

    & > tr > td {
      border: 2px solid #1f2437;
      padding: 15px 35px;
    }

    & > tr:nth-child(odd) {
      background: linear-gradient(0deg, rgba(53, 60, 78, 1) 0%, rgba(52, 59, 77, 1) 100%);
    }

    & > tr:nth-child(even) {
      background: linear-gradient(0deg, rgba(45, 52, 70, 1) 0%, rgba(44, 51, 69, 1) 100%);
    }
  }
`

export const Th = styled.th<TaskInterfaces.Th>`
  ${({ tiny }) =>
    tiny &&
    css`
      width: 1%;
    `}
`

export const Td = styled.td<TaskInterfaces.Td>`
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ fixedWidth }) =>
    fixedWidth &&
    css`
      width: ${fixedWidth}px;
      max-width: ${fixedWidth}px;

      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${({ oneLine }) =>
    oneLine &&
    css`
      max-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  ${({ multiLine }) =>
    multiLine &&
    css`
      word-break: break-word;
    `}
`

export const Table = ({ children }: { children: ReactNode }): JSX.Element => (
  <TableWrapper>{children}</TableWrapper>
)
