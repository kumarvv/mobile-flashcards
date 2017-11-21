import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = "mobile-flashcards:notifications"

export function deleteKey(obj, key) {
  if (obj) {
    delete obj[key]
  }
  return obj
}

export function addCardToDeckCards(decks, title, card) {
  if (!decks) {
    return {}
  }

  return {
    ...decks,
    [title]: {
      ...decks[title],
      questions: decks[title].questions && Array.isArray(decks[title].questions)
        ? decks[title].questions.concat(card)
        : [card]
    }
  }
}

export const clearLocalNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
)

export const createNotification = () => ({
  title: 'Take a daily Quiz!',
  body: "👋 Don't forget to complete at least one quiz a day",
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
})

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(17)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              ).then(() => AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)))
            }
          })
      }
    })
}
