import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Toast, { setToastRef } from './components/common/Toast'
import WelcomeScreen from './screens/WelcomeScreen'
import { navigationRef } from './util/navigationService'

type OwnProps = {}
type Props = OwnProps

const Tab = createBottomTabNavigator()

const App: FunctionComponent<Props> = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={WelcomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
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
