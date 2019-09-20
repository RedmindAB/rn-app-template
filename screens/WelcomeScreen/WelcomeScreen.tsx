import React, { Component } from 'react'
import { CenteredFillView, Text, CircleView } from 'styled-native-kit'
import i18n, { keys } from '../../i18n'

type OwnProps = {}
type Props = OwnProps

class WelcomeScreen extends Component<Props> {
  render() {
    return (
      <CenteredFillView>
        <CircleView size={240} color='purple'>
          <Text centered uppercase fontSize={100}>
            {i18n.t(keys.welcome)}
          </Text>
        </CircleView>
      </CenteredFillView>
    )
  }
}

export default WelcomeScreen
