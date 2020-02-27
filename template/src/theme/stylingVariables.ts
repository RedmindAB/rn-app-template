import { getBottomSpace } from 'react-native-iphone-x-helper'

import layout from './layout'
import theme from '.'

export const baseline = layout.isSmallDevice ? 8 : 8
export const touchableActiveOpacity = 0.8
export const screenContainerPadding = baseline * 2.5

const boxShadowDefault = {
  shadowColor: 'rgba(9, 16, 95, 0.24)',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 1
}

export const boxShadowLarge = {
  shadowColor: 'rgba(9, 16, 95, 0.4)',
  ...boxShadowDefault,
  shadowRadius: 8,
  elevation: 8
}

export const boxShadowMedium = {
  ...boxShadowDefault,
  shadowRadius: 4,
  elevation: 4
}

export const getBottomScreenSpace = () => getBottomSpace() || theme.baseline * 2
