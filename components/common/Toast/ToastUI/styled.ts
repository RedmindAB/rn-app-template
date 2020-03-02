import styled, { css } from 'styled-components/native'
import { TouchableOpacity, Text, SafeAreaView } from 'react-native'
import { CircleView } from 'styled-native-kit'
import theme from '../../../theme'
import layout from '../../../../theme/layout'

export const cardShadow = css`
  shadow-color: #948aa5;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.22;
  shadow-radius: 6px;
  elevation: 3;
`

export const ToastWrapper = styled(SafeAreaView)`
  position: absolute;
  top: ${layout.height * 0.15};
  left: 0;
  right: 0;
`

export const ToastCard = styled(TouchableOpacity)`
  background-color: white;
  ${cardShadow};
  padding: ${theme.baseline * 2}px ${theme.baseline * 1.5}px;
  border-radius: 12;
  margin: 0 ${theme.baseline * 2}px;
  margin-bottom: ${theme.baseline / 2}px;
`

export const ToastTextContainer = styled.View`
  margin-left: ${theme.baseline};
  width: 85%;
`

export const ToastTitle = styled(Text)`
  font-size: 12;
  text-transform: uppercase;
`

export const ToastMessage = styled(Text)`
  font-size: 14;
  line-height: ${14 * 1.3};
`

export const ToastImage = styled(CircleView).attrs(() => ({
  size: 33
}))``
