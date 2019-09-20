import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { NavigationState } from 'react-navigation'
import navigationService from './util/navigationService'
import RootNavigation from './navigation'
import actions from './redux/actions'
import config from './constants/config'

type OwnProps = {}
type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>
type Props = OwnProps & mapDispatchToProps

class App extends Component<Props> {
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
          uriPrefix={config.deepLinkUriPrefix}
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
