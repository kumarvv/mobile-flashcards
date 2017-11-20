import { AsyncStorage } from 'react-native'
import { generateSampleData } from "./helpers"

const MOBILE_FLASHCARDS_KEY = "MobileFlashCards:Data"

function initAndGet() {
  return AsyncStorage.setItem(MOBILE_FLASHCARDS_KEY, JSON.stringify(generateSampleData()))
    .then(JSON.parse)
}

export function getDecks() {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
    .then(JSON.parse)
}

export function getDeck(id) {
  return getDecks()
    .then((data) => {
      return data[id]
    })
}

export function addDeck(title, deck) {
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify({
      [title]: deck
    }))
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [card]
    }
  }))
}
