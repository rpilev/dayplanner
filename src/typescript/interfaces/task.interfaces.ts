export interface Task {
  id: number
  name: string
  description: string
  done: boolean
}

export interface TasksState {
  list: Task[]
}

export interface RootState {
  tasks: TasksState
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

export interface Table {
  tasks: Task[]
}

export interface GetTasksResponse {
  content: [Task]
}
