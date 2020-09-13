import axios, { AxiosResponse } from 'axios'

import { TaskInterfaces } from '@app/typescript/interfaces'

export const getTasks = async (): Promise<AxiosResponse> =>
  axios.get<TaskInterfaces.GetTasksResponse>('/api/task')
