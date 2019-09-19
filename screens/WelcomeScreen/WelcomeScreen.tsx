import React, { Component } from 'react'

import { CenteredFillView, Text } from 'styled-native-kit'

type OwnProps = {}

type Props = OwnProps

class WelcomeScreen extends Component<Props> {
  render() {
    return (
      <CenteredFillView>
        <Text centered uppercase>
          Welcome Redmind!
        </Text>
      </CenteredFillView>
    )
  }
}

export default WelcomeScreen
