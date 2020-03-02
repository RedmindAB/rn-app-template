import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')
const isSmallDevice = width < 340

export default {
  height,
  width,
  isSmallDevice
}
