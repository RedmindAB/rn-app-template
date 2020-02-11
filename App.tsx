import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import navigationService from './util/navigationService'
import RootNavigation from './navigation'
import constants from './config/constants'
import { handleNavigationStateChange } from './util/helpers'

type OwnProps = {}
type Props = OwnProps

const App:FunctionComponent<Props> = () => {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigation
          onNavigationStateChange={handleNavigationStateChange}
          uriPrefix={constants.deepLinkUriPrefix}
          ref={navigationService.bindNavigator}
        />
      </View>
    )
}

export default App