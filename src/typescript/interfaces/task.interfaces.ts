export interface Task {
  name: string
  description: string
  isDone: boolean
}

export interface TasksState {
  list: Task[]
}

export interface RootState {
  tasks: TasksState
}
