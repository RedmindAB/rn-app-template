import { SET_CURRENT_SCREEN } from './types'

export type MiscState = {
  currentScreen: string
}

const INITIAL_STATE: MiscState = {
  currentScreen: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_SCREEN:
      return { ...state, currentScreen: action.payload }
    default:
      return state
  }
}

export default reducer
