import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import AsyncStorage from '@react-native-community/async-storage'

const oldConsoleLog = console.log

console.log = (...args) => {
  oldConsoleLog(...args)

  Reactotron.display({
    name: 'LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null
  })
}

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()

export default Reactotron
