import firebase, { RNFirebase } from 'react-native-firebase'
import { store } from '../../redux/store'
import env from '../../config/env'
import constants from '../../config/constants'

export async function sendPasswordlessEmailLoginLink(email: string) {
  return await firebase.auth().sendSignInLinkToEmail(email, {
    url: env.loginUrl,
    iOS: {
      bundleId: constants.bundleId
    },
    handleCodeInApp: true,
    android: { packageName: constants.bundleId, installApp: true }
  })
}

// Add firebase console.log helper class.

// Needs firebase write rules to work.
export async function setFcmToken() {
  try {
    const fcmToken = await firebase.messaging().getToken()
    const userId = store.getState().user.id
    await firebase
      .firestore()
      .doc(`users/${userId}`)
      .update({ fcmToken })
  } catch (error) {
    console.log(error)
  }
}
