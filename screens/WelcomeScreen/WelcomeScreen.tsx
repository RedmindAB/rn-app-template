import React, { Component } from 'react'
import { CenteredFillView, Text, CircleView } from 'styled-native-kit'
import FeatherIcon from 'react-native-vector-icons/Feather'
import i18n, { tk } from '../../i18n'

type OwnProps = {}
type Props = OwnProps

class WelcomeScreen extends Component<Props> {
  render() {
    return (
      <CenteredFillView>
        <CircleView size={240} color="purple">
          <FeatherIcon name="check" size={26 * 2} color="lightgreen" />
          <Text centered uppercase fontSize={26} color="white">
            {i18n.t(tk.welcome)}
          </Text>
        </CircleView>
      </CenteredFillView>
    )
  }
}

export default WelcomeScreen
