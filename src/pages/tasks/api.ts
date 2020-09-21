import axios from 'axios'

import { TaskInterfaces } from '@app/typescript/interfaces'

export const getTasks = async (): Promise<TaskInterfaces.GetTasksResponse> => {
  const { data } = await axios.get<TaskInterfaces.GetTasksResponse>('/api/task')

  return data
}
