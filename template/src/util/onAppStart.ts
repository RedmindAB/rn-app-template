import { Platform } from 'react-native'
import firebase from 'react-native-firebase'
import constants from '../config/constants'
import { store } from '../redux/store'
import { APP_START } from '../redux/misc/types'
import axios from '../api'
import { setFcmToken } from './firebase/firebase'

export function clearNotificationBadges() {
  if (Platform.OS !== 'ios') return
  firebase.notifications().setBadge(0)
}

export async function setFirebaseToken() {
  try {
    const token = await firebase.auth().currentUser.getIdToken()
    axios.defaults.headers.authorization = token
    console.log(
      `%c============\nACCESS TOKEN\n============\n\n${token}\n`,
      'color: green; font-size: 20px;'
    )
    await setFcmToken()
  } catch (error) {
    console.log(error)
  }
}

export async function listenForNotifications() {
  try {
    await firebase.messaging().requestPermission()
    return firebase.notifications().onNotification(({ title, body }) => {
      const notification = new firebase.notifications.Notification()
      notification.setTitle(title)
      notification.setBody(body)
      notification.android.setChannelId(constants.androidChannelId)
      firebase.notifications().displayNotification(notification)
    })
  } catch (error) {
    console.log(error)
  }
}

export default async function(isLoggedIn?: boolean) {
  store.dispatch({ type: APP_START })

  if (isLoggedIn) {
    setFirebaseToken()
  }
  
  clearNotificationBadges()
  const stopListeningForNotifications = listenForNotifications()

  return {
    stopListeningForNotifications
  }
}
