import { requestsReducer } from 'redux-saga-requests'
import {
  FETCH_UPPER_PLACEHOLDER,
  CREATE_UPPER_PLACEHOLDER,
  DELETE_UPPER_PLACEHOLDER,
  UPDATE_UPPER_PLACEHOLDER
} from './types'

export interface PASCAL_PLACEHOLDER {
  id: string
  pending: number
  error: string
}

export type PASCAL_PLACEHOLDERState = {
  data: PASCAL_PLACEHOLDER[]
}

export default requestsReducer({
  actionType: FETCH_UPPER_PLACEHOLDER,
  multiple: true,
  mutations: {
    [CREATE_UPPER_PLACEHOLDER]: (state, action) => [...state.data, action.data],
    [UPDATE_UPPER_PLACEHOLDER]: (state, action) =>
      state.data.map(PLACEHOLDER => (PLACEHOLDER.id === action.meta.id ? action.data : PLACEHOLDER)),
    [DELETE_UPPER_PLACEHOLDER]: {
      updateDataOptimistic: (state, action) =>
        state.data.filter(PLACEHOLDER => PLACEHOLDER.id !== action.meta.id),
      revertData: (state, action) => [...state.data, action.meta]
    }
  }
})
