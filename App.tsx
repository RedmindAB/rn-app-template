import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { NavigationState } from 'react-navigation'
import navigationService from './util/navigationService'
import RootNavigation from './navigation'
import actions from './redux/actions'
import constants from './config/constants'
import { store } from './redux/store'
import { APP_START } from './redux/misc/types'
import axios from './api'
import onAppStart from './util/onAppStart'

type OwnProps = {}
type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>
type Props = OwnProps & mapDispatchToProps

class App extends Component<Props> {
  componentDidMount() {
    // * Uncomment after integrating firebase and removing unneeded functions
    // onAppStart()
  }

  getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null
    }
    const route = navigationState.routes[navigationState.index]

    if (route.routes) {
      return this.getActiveRouteName(route)
    }

    return route.routeName
  }

  handleNavigationStateChange = (
    prevState: NavigationState,
    currentState: NavigationState
  ) => {
    const { setCurrentScreen } = this.props
    const currentScreen = this.getActiveRouteName(currentState)
    const prevScreen = this.getActiveRouteName(prevState)

    if (prevScreen !== currentScreen) {
      setCurrentScreen(currentScreen)
    }
  }

  bindNavigator = navigatorRef =>
    navigationService.setTopLevelNavigator(navigatorRef)

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigation
          onNavigationStateChange={this.handleNavigationStateChange}
          uriPrefix={constants.deepLinkUriPrefix}
          ref={this.bindNavigator}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentScreen: (screenName: string) =>
    dispatch(actions.misc.setCurrentScreen(screenName))
})

export default connect(mapDispatchToProps)(App)
