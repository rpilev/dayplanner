import { ReactNode } from 'react'

export interface Table {
  children: ReactNode
  isLoading?: boolean
}

export interface Td {
  center?: boolean
  fixedWidth?: number
  oneLine?: boolean
  multiLine?: boolean
}

export interface Th {
  tiny?: boolean
}
