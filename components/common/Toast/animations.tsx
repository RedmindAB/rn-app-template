import React, { FunctionComponent, useRef, useEffect } from 'react'
import { Animated } from 'react-native'
import theme from '../../../theme'

type OwnProps = {
  duration?: number
  yOffset?: number
  delay?: number
  height?: number
}
type Props = OwnProps

export const DEFAULT_DURATION = 200
const DEFAULT_Y_OFFSET = theme.baseline * 6

export const SlideDownFadeIn: FunctionComponent<Props> = ({
  children,
  delay = 0,
  duration = DEFAULT_DURATION,
  yOffset = DEFAULT_Y_OFFSET
}) => {
  const opacity = useRef(new Animated.Value(0))
  const translateY = useRef(new Animated.Value(-yOffset))

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity.current, {
        toValue: 1,
        duration,
        delay
      }),
      Animated.timing(translateY.current, {
        toValue: 0,
        duration,
        delay
      })
    ]).start()
  }, [])

  return (
    <Animated.View
      style={{
        opacity: opacity.current,
        transform: [{ translateY: translateY.current }]
      }}
    >
      {children}
    </Animated.View>
  )
}

export const Shrink: FunctionComponent<Props> = ({
  children,
  delay = 0,
  duration = DEFAULT_DURATION,
  height
}) => {
  const scale = useRef(new Animated.Value(1))
  const _height = useRef(new Animated.Value(height))

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale.current, {
        toValue: 0,
        duration,
        delay
      }),
      Animated.timing(_height.current, {
        toValue: 0,
        duration,
        delay
      })
    ]).start()
  }, [])

  return (
    <Animated.View style={{ height: _height.current }}>
      <Animated.View
        style={{
          transform: [{ scale: scale.current }]
        }}
      >
        {children}
      </Animated.View>
    </Animated.View>
  )
}
