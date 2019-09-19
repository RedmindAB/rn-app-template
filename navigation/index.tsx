import React from 'react'
import { fromRight } from 'react-navigation-transitions'
import {
  createAppContainer,
  createBottomTabNavigator,
  NavigationScreenOptions
} from 'react-navigation'

import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'
import { screens, stacks } from './strings'

const WelcomeStack = createStacknavigator(
  {
    [screens.WELCOME]: WelcomeScreen
  },
  {
    // Use this to replace android navigation behaviour throughout the app
    transitionConfig: () => fromRight()
  }
)

const RootNavigation = createBottomTabNavigator({
  [stacks.WELCOME]: WelcomeStack
})

export default createAppContainer(RootNavigation)
