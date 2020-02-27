import { SET_CURRENT_SCREEN } from './types'

export const setCurrentScreen = (screenName: string) => ({
  type: SET_CURRENT_SCREEN,
  payload: screenName
})
