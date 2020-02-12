import { persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'

// Redux Modules
import { UserState, userReducer } from './user'
import { MiscState, miscReducer } from './misc'

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['user']
}

export type MainState = {
  misc: MiscState
  user: UserState
}

export default persistCombineReducers<MainState>(persistConfig, {
  misc: miscReducer,
  user: userReducer
})
