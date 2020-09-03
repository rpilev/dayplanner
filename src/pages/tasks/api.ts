import axios, { AxiosResponse } from 'axios'

import { Types } from '@typescript/types'

export const getTasks = async (): Promise<AxiosResponse> => axios.get<Types.GetTasksResponse>('/api/task')
