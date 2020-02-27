import { CLOSE_ALERT, SHOW_ALERT } from './types'
import { AlertConfig } from './reducer'
import { store } from '..'
import i18n, { l } from '../../i18n'

const closeAlertCreator = () => ({
  type: CLOSE_ALERT
})

const showAlertCreator = (options: AlertConfig) => ({
  type: SHOW_ALERT,
  payload: options
})

export const showAlert = (options: AlertConfig) =>
  store.dispatch(showAlertCreator(options))

export const closeAlert = () => store.dispatch(closeAlertCreator())

export const showGenericErrorAlert = (showInsideModal?: boolean) =>
  showAlert({
    title: i18n.t(l.alerts.generic_error.title),
    message: i18n.t(l.alerts.generic_error.message),
    showInsideModal,
    hidePrimaryButton: true
  })
