import { AsyncStorage } from 'react-native'
import { deleteKey, addCardToDeckCards } from "./helpers"

const MOBILE_FLASHCARDS_DECKS_KEY = "MobileFlashCards:Decks"
const MOBILE_FLASHCARDS_HISTORY_KEY = "MobileFlashCards:History"

export function getDecks() {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_DECKS_KEY)
    .then(JSON.parse)
}

export function getDeck(id) {
  return getDecks()
    .then((data) => {
      return data[id]
    })
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_DECKS_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_DECKS_KEY)
    .then(JSON.parse)
    .then((data) => addCardToDeckCards(data, title, card))
    .then((data) => {
      return AsyncStorage.setItem(MOBILE_FLASHCARDS_DECKS_KEY, JSON.stringify(data))
    })
}

export function removeAll() {
  return AsyncStorage.removeItem(MOBILE_FLASHCARDS_DECKS_KEY)
}

export function removeDeck(title) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_DECKS_KEY)
    .then(JSON.parse)
    .then((data) => {
      return AsyncStorage.setItem(MOBILE_FLASHCARDS_DECKS_KEY, JSON.stringify(deleteKey(data, title)))
    })
}

export function getHistory() {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_HISTORY_KEY)
    .then(JSON.parse)
}

export function addToHistory(result) {
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_HISTORY_KEY, JSON.stringify({
    [result.time]: result
  }))
}

export function clearHistory() {
  return AsyncStorage.setItem(MOBILE_FLASHCARDS_HISTORY_KEY, JSON.stringify({}))
}
