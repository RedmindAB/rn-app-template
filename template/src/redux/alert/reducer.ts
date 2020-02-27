import { CLOSE_ALERT, SHOW_ALERT } from './types'
import { oc } from 'ts-optchain'
import { SvgProps } from 'react-native-svg'
import i18n, { l } from '../../i18n'
import { store } from '..'
import { closeAlert } from './actions'

export type AlertConfigButton = {
  text?: string
  style?: 'cancel' | 'destructive' | 'default'
  onPress?: () => void
}
export type AlertConfig = {
  IconComponent?: React.FunctionComponent<SvgProps>
  hideCloseButton?: boolean
  hideSecondaryButton?: boolean
  hidePrimaryButton?: boolean
  disableAutoClose?: boolean
  title?: string
  message?: string
  showInsideModal?: boolean
  buttonPrimary?: AlertConfigButton
  buttonSecondary?: AlertConfigButton
  CustomComponent?: any
}

export type AlertState = {
  showAlert: boolean
  alertConfig: AlertConfig
}

const EMPTY_BUTTON_CONFIG = {
  text: '',
  style: undefined,
  onPress() {}
}

const BUTTON_SECONDARY_FALLBACK = {
  ...EMPTY_BUTTON_CONFIG,
  onPress() {
    closeAlert()
  },
  text: i18n.t(l.buttons.cancel)
}

const BUTTON_PRIMARY_FALLBACK = {
  ...EMPTY_BUTTON_CONFIG,
  text: i18n.t(l.buttons.continue)
}

const INITIAL_STATE: AlertState = {
  showAlert: false,
  alertConfig: null
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLOSE_ALERT:
      return {
        ...state,
        showAlert: false
      }
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertConfig: {
          ...action.payload,
          buttonPrimary: {
            ...BUTTON_PRIMARY_FALLBACK,
            ...oc(action).payload.buttonPrimary({})
          },
          buttonSecondary: {
            ...BUTTON_SECONDARY_FALLBACK,
            ...oc(action).payload.buttonSecondary({})
          }
        }
      }
    default:
      return state
  }
}

export default reducer
