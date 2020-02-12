import Toast, { ToastOptions } from './Toast'

export class ToastService {
  static toastRef: Toast = undefined

  static setToastRef = ref => (ToastService.toastRef = ref)

  static clearToasts = () => ToastService.toastRef.clearToasts()

  static showToast = (options: ToastOptions) => {
    if (
      typeof ToastService.toastRef === 'undefined' ||
      !ToastService.toastRef.showToast
    ) {
      return console.warn('toastRef is undefined')
    }
    ToastService.toastRef.showToast(options)
  }
}

export const showToast = ToastService.showToast
export const clearToasts = ToastService.clearToasts
export const setToastRef = ToastService.setToastRef
