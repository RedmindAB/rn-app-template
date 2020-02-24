import 'moment/locale/sv'
import { NativeModules, Platform } from 'react-native'
import i18n from 'i18n-js'
import transformKeys from 'object-key-path-transformer'
import moment from 'moment'
import { oc } from 'ts-optchain'
import sv from './languages/sv.json'
import en from './languages/en.json'
import missingTranslationDetection from './languages/missingTranslationDetection.json'
import breakingLongTextDetection from './languages/breakingLongTextDetection.json'

export const tk = transformKeys(en)

const getIOSDeviceLocale = () =>
  oc(NativeModules)
    .SettingsManager.settings.AppleLocale('')
    .substr(0, 2) ||
  oc(NativeModules).SettingsManager.settings.AppleLanguages(['en'])[0]

const getAndroidDeviceLocale = () => NativeModules.I18nManager.localeIdentifier

const deviceLocale =
  Platform.OS === 'ios' ? getIOSDeviceLocale() : getAndroidDeviceLocale()

i18n.defaultLocale = 'en'
i18n.locale = deviceLocale
i18n.fallbacks = true
i18n.translations = { en, sv }

moment.locale(deviceLocale.toLowerCase() === 'sv' ? 'sv' : 'en')

if (__DEV__) {
  // used for looking for missing translations
  i18n.translations.missingTranslationDetection = missingTranslationDetection
  // used for checking breaking texts
  i18n.translations.breakingLongTextDetection = breakingLongTextDetection
}

export default i18n

console.log(process.env)
