import { Dispatch } from 'redux'
import * as api from './api'
import { actions } from './store'

export const getTasks = (dispatch: Dispatch): void => {
  api.getTasks().then(({ data: { content } }) => {
    dispatch(actions.setTasksList(content))
  })
}
