import React, { Component } from 'react'
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator
} from 'react-native'
import { FlexRow } from 'styled-native-kit'
import { ButtonContainer, ButtonTitle } from './styled'
import theme from '../../../theme'

type OwnProps = {
  title: string
  small?: boolean
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  variant?: 'primary' | 'secondary' | 'outline'
  containerProps?: any
  loading?: boolean
  loadingTitle?: string
  disabled?: boolean
  error?: boolean
  iconProps?: { height?: number; width?: number; fill?: string }
  noFillIcon?: boolean
  success?: boolean
  background?: boolean
  secondary?: boolean
  tertiary?: boolean
  iconComponent?: any
} & TouchableOpacityProps
type Props = OwnProps

class Button extends Component<Props> {
  render() {
    const {
      small,
      variant,
      title,
      style,
      containerProps,
      disabled,
      textStyle,
      loading,
      error,
      success,
      background,
      iconProps,
      secondary,
      tertiary,
      iconComponent: Icon,
      loadingTitle,
      noFillIcon: noFill,
      ...touchableProps
    } = this.props

    return (
      <TouchableOpacity
        disabled={disabled || loading}
        activeOpacity={theme.touchableActiveOpacity}
        {...touchableProps}
      >
        <ButtonContainer
          style={style}
          disabled={disabled || loading}
          primary
          variant={variant}
          small={small}
          success={success}
          error={error}
          background={background}
          secondary={secondary}
          tertiary={tertiary}
          {...containerProps}
        >
          <FlexRow>
            {loading && (
              <ActivityIndicator
                style={{ marginRight: theme.baseline }}
                color="white"
              />
            )}
            {Icon && (
              <Icon
                fill={noFill ? 'transparent' : 'white'}
                style={{ marginRight: theme.baseline }}
                {...iconProps}
              />
            )}
            <ButtonTitle
              style={textStyle}
              variant={variant}
              primary
              secondary={secondary}
              tertiary={tertiary}
              background={background}
            >
              {loading ? loadingTitle : title}
            </ButtonTitle>
          </FlexRow>
        </ButtonContainer>
      </TouchableOpacity>
    )
  }
}
export default Button
