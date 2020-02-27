import React, { Component } from 'react'
import { View, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native'
import ToastUI from './ToastUI/ToastUI'
import { DEFAULT_DURATION } from './animations'

type OwnProps = {
  contentContainerStyle?: StyleProp<ViewStyle>
  toastContainerStyle?: StyleProp<ViewStyle>
  toastTitleStyle?: StyleProp<TextStyle>
  toastMessageStyle?: StyleProp<TextStyle>
  toastImageStyle?: StyleProp<ImageStyle>
}
type Props = OwnProps

type ShowToastOptions = {
  duration?: number
  sticky?: boolean
}

export type ToastOptions = {
  title: string
  message: string
  imageUrl?: string
  onPress?: () => void
}

export type ToastQueueItem = ToastOptions & {
  animateOut: boolean
  id: string
}

export class Toast extends Component<Props> {
  public static DEFAULT_DURATION = 5000

  state = {
    toastQueue: []
  }

  public showToast({
    duration,
    ...toastOptions
  }: ToastOptions & ShowToastOptions) {
    const { toastQueue } = this.state
    const id = Math.random().toString()

    this.setState({
      toastQueue: [
        ...toastQueue,
        {
          ...toastOptions,
          onPress: () => this._onPress(id, toastOptions.onPress),
          id
        }
      ]
    })

    if (toastOptions.sticky) {
      return () => this.animateOutToast(id)
    }

    const timeout = setTimeout(
      () => this.animateOutToast(id),
      duration || Toast.DEFAULT_DURATION
    )

    return () => {
      clearTimeout(timeout)
      this.animateOutToast(id)
    }
  }

  public clearToasts = () => this.setState({ touastQueue: [] })

  animateOutToast = (id: string) => {
    const { toastQueue } = this.state

    const newQueue = toastQueue.map(t =>
      t.id === id ? { ...t, animateOut: true } : t
    )

    this.setState({ toastQueue: newQueue })
    setTimeout(() => this.removeToast(id), DEFAULT_DURATION)
  }

  removeToast = (id: string) => {
    const { toastQueue } = this.state

    const newQueue = toastQueue.filter(t => t.id !== id)
    this.setState({ toastQueue: newQueue })
  }

  _onPress = (id: string, callback: () => void) => {
    if (typeof callback !== 'function') return
    callback()
    this.removeToast(id)
  }

  renderToast = (toast: ToastQueueItem) => (
    <ToastUI key={toast.id} {...this.props} {...toast} />
  )

  render() {
    const { contentContainerStyle } = this.props
    const { toastQueue } = this.state

    return (
      <View style={contentContainerStyle}>
        {toastQueue.map(this.renderToast)}
      </View>
    )
  }
}

export default Toast
