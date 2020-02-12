import { RNFirebase } from 'react-native-firebase'
import { success } from 'redux-saga-requests'
import { LOGOUT, LOGIN, FETCH_USER } from './types'

export type BaseUserState = {
  isLoggedIn: boolean
}

export type UserState = BaseUserState & RNFirebase.UserCredential['user']

const INITIAL_STATE: BaseUserState = {
  isLoggedIn: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case success(LOGIN):
    case success(FETCH_USER):
      return { ...state, isLoggedIn: true, ...action.data }
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}
