import { store } from "../redux/store"
import actions from "../redux/actions"
import { NavigationState } from "react-navigation"

export function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]

  if (route.routes) {
    return this.getActiveRouteName(route)
  }

  return route.routeName
}

export function handleNavigationStateChange(
  prevState: NavigationState,
  currentState: NavigationState
) {
  const { setCurrentScreen } = this.props
  const currentScreen = this.getActiveRouteName(currentState)
  const prevScreen = this.getActiveRouteName(prevState)

  if (prevScreen !== currentScreen) {
    store.dispatch(actions.misc.setCurrentScreen(currentScreen))
  }
}