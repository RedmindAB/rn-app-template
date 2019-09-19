import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

import rootReducer from './reducers'
import rootSaga from './sagas'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
