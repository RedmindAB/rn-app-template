import React, { FunctionComponent } from 'react'
import { FlexRow, View } from 'styled-native-kit'
import {
  ToastCard,
  ToastTitle,
  ToastMessage,
  ToastTextContainer,
  ToastImage
} from './styled'
import {
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle
} from 'react-native'
import { ToastQueueItem } from '../Toast'
import { SlideDownFadeIn, Shrink } from '../animations'
import { useLayout } from '@redmindab/react-hooks'

type OwnProps = {
  animated?: boolean
  toastContainerStyle?: StyleProp<ViewStyle>
  toastTitleStyle?: StyleProp<TextStyle>
  toastMessageStyle?: StyleProp<TextStyle>
  toastImageStyle?: StyleProp<ImageStyle>
}

type Props = OwnProps & ToastQueueItem

export const ToastUI: FunctionComponent<Props> = ({
  title,
  message,
  imageUrl,
  onPress,
  animateOut,
  animated = true,
  toastContainerStyle,
  toastImageStyle,
  toastMessageStyle,
  toastTitleStyle
}) => {
  const AnimationWrapper = animated
    ? animateOut
      ? Shrink
      : SlideDownFadeIn
    : View

  const [layout, bindLayout] = useLayout()

  return (
    <AnimationWrapper height={layout.height}>
      <ToastCard
        style={toastContainerStyle}
        activeOpacity={onPress ? 0.7 : 1}
        onPress={onPress}
        {...bindLayout}
      >
        <FlexRow style={{ alignItems: 'flex-start' }}>
          {imageUrl && (
            <ToastImage
              as={Image}
              source={{ uri: imageUrl }}
              style={toastImageStyle}
            />
          )}
          <ToastTextContainer>
            <ToastTitle style={toastTitleStyle}>{title}</ToastTitle>
            <ToastMessage style={toastMessageStyle}>{message}</ToastMessage>
          </ToastTextContainer>
        </FlexRow>
      </ToastCard>
    </AnimationWrapper>
  )
}

export default ToastUI
