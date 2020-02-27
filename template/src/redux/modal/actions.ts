import { HIDE_MODAL } from './types'
import { store } from '..'

export const hideModal = () => ({
  type: HIDE_MODAL
})

export const closeModal = () => store.dispatch(hideModal())
