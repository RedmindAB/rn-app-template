import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import navigationService from './util/navigationService'
import RootNavigation from './navigation'
import config from './constants/config'
import { MainState } from './redux/reducers'
import { Dispatch } from 'redux'
import actions from './redux/actions'

type OwnProps = {}
type StateProps = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>
type Props = OwnProps & StateProps & mapDispatchToProps

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

  handleNavigationStateChange = (prevState, currentState) => {
    const currentScreen = this.getActiveRouteName(currentState)
    const prevScreen = this.getActiveRouteName(prevState)

    if (prevScreen !== currentScreen) {
      this.props.setCurrentScreen(currentScreen)
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigation
          onNavigationStateChange={this.handleNavigationStateChange}
          uriPrefix={config.deepLinkUriPrefix}
          ref={navigatorRef =>
            navigationService.setTopLevelNavigator(navigatorRef)
          }
        />
      </View>
    )
  }
}

const mapStateToProps = ({ user }: MainState) => ({ user })

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentScreen: (screenName: string) =>
    dispatch(actions.misc.setCurrentScreen(screenName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
