import { Dimensions } from 'react-native'
import { Header } from 'react-navigation'

const { height, width } = Dimensions.get('screen')
const isSmallDevice = width < 340
const headerHeight = Header.HEIGHT

export default {
  height,
  width,
  isSmallDevice,
  headerHeight
}
