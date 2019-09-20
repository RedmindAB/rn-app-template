import {
  NavigationActions,
  NavigationContainerComponent
} from 'react-navigation'

let navigatorInstance: NavigationContainerComponent

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
  navigatorInstance = navigatorRef
}

function navigate(routeName: string, params = {}) {
  navigatorInstance.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

function goBack() {
  navigatorInstance.dispatch(NavigationActions.back())
}

function dispatch(opts) {
  navigatorInstance.dispatch(opts)
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  dispatch
}
