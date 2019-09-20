import {
  NavigationActions,
  NavigationContainerComponent
} from 'react-navigation'

let _navigator: NavigationContainerComponent

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
  _navigator = navigatorRef
}

function navigate(routeName: string, params = {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

function goBack() {
  _navigator.dispatch(NavigationActions.back())
}

function dispatch(opts) {
  _navigator.dispatch(opts)
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  dispatch
}
