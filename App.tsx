import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import navigationService from './util/navigationService'
import RootNavigation from './navigation'
import constants from './config/constants'
import { handleNavigationStateChange } from './util/helpers'
import Toast, { setToastRef } from './components/common/Toast'

type OwnProps = {}
type Props = OwnProps

const App: FunctionComponent<Props> = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <RootNavigation
        onNavigationStateChange={handleNavigationStateChange}
        uriPrefix={constants.deepLinkUriPrefix}
        ref={navigationService.bindNavigator}
      />
      <Toast
        ref={setToastRef}
        // TODO: implement preconfigured positioning for the content container
        contentContainerStyle={{
          position: 'absolute',
          top: 100,
          left: 0,
          right: 0
        }}
      />
    </View>
  )
}

export default App
