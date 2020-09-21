export interface Task {
  id: number
  name: string
  description: string
  done: boolean
}

export interface TaskState {
  list: Task[]
  loading: boolean
}

export interface RootState {
  task: TaskState
}

export interface GetTasksResponse {
  content: [Task]
}

export interface TasksTable {
  tasks: Task[]
  isLoading?: boolean
}
