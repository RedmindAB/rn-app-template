import styled from 'styled-components/native'
import layout from '../../../theme/layout'
import theme from '../../../theme'
import { CustomView, CustomText } from '../styled'

export const smallButtonWidth = layout.width * 0.5
export const largeButtonWidth = layout.width * 0.7
export const buttonHeight = 44
export const buttonBorderRadius = 8

export const ButtonContainer = styled(CustomView)`
  padding-left: 40;
  padding-right: 40;
  ${props =>
    props.variant === 'outline' &&
    `
    padding-left: 20;
    padding-right: 20;
  `}
  border-radius: ${buttonBorderRadius};
  width: ${props => (props.small ? smallButtonWidth : largeButtonWidth)};
  height: ${props =>
    props.variant === 'outline' ? buttonHeight * 0.8 : buttonHeight};
  ${props =>
    props.variant &&
    `background-color: ${
      theme[props.variant] ? theme[props.variant].color : theme.primary.color
    }`}
  ${props => props.variant === 'outline' && 'background-color: transparent;'}
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: center;
  ${props =>
    props.variant === 'outline' &&
    `
    border-width: 1;
    border-color: ${theme.background.color};
    `};
  ${props => props.disabled && 'opacity: 0.6'}
`

export const ButtonTitle = styled(CustomText)`
  text-align: center;
  font-size: ${16};
  font-family: ${theme.fonts.MontserratBold};
  ${props =>
    props.variant === 'outline' &&
    `
      color: ${theme.background.onColor};
      font-size: 16;
      font-family: ${theme.fonts.MontserratBold};
      font-weight: 400;
    `}
`
