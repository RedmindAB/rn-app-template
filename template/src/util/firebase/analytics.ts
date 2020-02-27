import AsyncStorage from '@react-native-community/async-storage'
import analytics from '@react-native-firebase/analytics'

export async function withCooldown(seconds: number, cb: () => void, id: string) {
  try {
    const cooldown = await AsyncStorage.getItem(id)

    if (!cooldown || (cooldown && +cooldown <= Date.now())) {
      cb()
      AsyncStorage.setItem(id, (Date.now() + 1000 * seconds).toString())
    }
  } catch (error) {
    console.log(error)
  }
}

const analyticLog = (message: string, parameters: any = ''): void => console.log(`%c[ANALYTICS]: ${message}`, 'color: green;', parameters)

export default class Analytics {
  static shouldAnalyze = !__DEV__
  static shouldLog = __DEV__

  static initialize(): void {
    if (this.shouldAnalyze) {
      this.setAnalyticsCollectionEnabled(true)
    }

    if (this.shouldLog) {
      analyticLog('Initialize')
    }
  }

  static logLogin(method: string) {
    if (this.shouldAnalyze) {
      analytics().logLogin({
        method
      })
    }
    if (this.shouldLog) {
      analyticLog(`Login - ${method}`)
    }
  }

  static setCurrentScreen(screenName: string, screenClassOverride?: string): void {
    if (this.shouldAnalyze) {
      analytics().setCurrentScreen(screenName, screenClassOverride)
    }
    if (this.shouldLog) {
      analyticLog(`Screen - ${screenName}`)
    }
  }

  static logEvent(eventName: string, parameters = {}): void {
    if (this.shouldAnalyze) {
      analytics().logEvent(eventName, parameters)
    }
    if (this.shouldLog) {
      analyticLog(`Event - ${eventName}`, parameters)
    }
  }

  static async logEventWithCooldown(seconds: number, eventName: string, parameters = {}) {
    try {
      const cooldown = await AsyncStorage.getItem(eventName)

      if (!cooldown || (cooldown && +cooldown <= Date.now())) {
        if (this.shouldAnalyze) {
          Analytics.logEvent(eventName, parameters)
        }
        if (this.shouldLog) {
          analyticLog(`Event - ${eventName}`, parameters)
        }
        AsyncStorage.setItem(eventName, (Date.now() + 1000 * seconds).toString())
      }
    } catch (error) {
      console.log(error)
    }
  }

  static setUserProperty(name: string, value: string): void {
    if (this.shouldAnalyze) {
      analytics().setUserProperty(name, value.toString())
    }
    if (this.shouldLog) {
      analyticLog(`User Property - ${name}: ${value}`)
    }
  }

  static setUserId(id: string): void {
    if (this.shouldAnalyze) {
      analytics().setUserId(id)
    }
    if (this.shouldLog) {
      analyticLog(`User ID - ${id}`)
    }
  }

  static setAnalyticsCollectionEnabled(enabled: boolean): void {
    if (this.shouldAnalyze) {
      analytics().setAnalyticsCollectionEnabled(enabled)
    }
    if (this.shouldLog) {
      analyticLog(`Collection Enabled`)
    }
  }

  static setMinimumSessionDuration(miliseconds: number): void {
    if (this.shouldAnalyze) {
      analytics().setMinimumSessionDuration(miliseconds)
    }
    if (this.shouldLog) {
      analyticLog(`Minimum Session Duration - ${miliseconds}MS`)
    }
  }

  static setSessionTimeoutDuration(miliseconds: number): void {
    if (this.shouldAnalyze) {
      analytics().setSessionTimeoutDuration(miliseconds)
    }
    if (this.shouldLog) {
      analyticLog(`Session Timeout Duration - ${miliseconds}MS`)
    }
  }
}