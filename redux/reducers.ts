import { persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import { MiscState, miscReducer } from './misc'

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: []
}

export type MainState = {
  misc: MiscState
}

export default persistCombineReducers<MainState>(persistConfig, {
  misc: miscReducer
})
