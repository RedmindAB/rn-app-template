import { CLEAR_UPPER_PLACEHOLDER } from './types'

export type PASCAL_PLACEHOLDERState = {}

const INITIAL_STATE: PASCAL_PLACEHOLDERState = {}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_UPPER_PLACEHOLDER:
      return INITIAL_STATE
    default:
      return state
  }
}

export default reducer
