import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import Reactotron from '../ReactotronConfig'

const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

let middleware

if (process.env.JEST_WORKER_ID) {
  middleware = compose(applyMiddleware(sagaMiddleware))
} else {
  middleware = compose(
    applyMiddleware(sagaMiddleware),
    Reactotron.createEnhancer()
  )
}
export const store = createStore(rootReducer, middleware)
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
