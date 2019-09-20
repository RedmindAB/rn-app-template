import React, { Component } from 'react'
import { CenteredFillView, Text } from 'styled-native-kit'

import i18n, { keys } from '../../i18n'

type OwnProps = {}

type Props = OwnProps

class WelcomeScreen extends Component<Props> {
  render() {
    return (
      <CenteredFillView>
        <Text centered uppercase>
          {i18n.t(keys.welcome)}!
        </Text>
      </CenteredFillView>
    )
  }
}

export default WelcomeScreen
