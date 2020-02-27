import { all } from 'redux-saga/effects'
import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from '../api'

// Redux Saga Watchers
import userWatcher from './user/sagas'

export default function*() {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield all([watchRequests(), userWatcher()])
}
