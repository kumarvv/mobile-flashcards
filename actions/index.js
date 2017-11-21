export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_NEW_DECK = 'RECEIVE_NEW_DECK'
export const RECEIVE_REMOVE_ALL_DECKS = 'REMOVE_ALL_DECK'
export const RECEIVE_REMOVE_DECK = 'REMOVE_DECK'
export const RECEIVE_ADD_CARD = 'RECEIVE_ADD_CARD'
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY'
export const RECEIVE_ADD_HISTORY = 'RECEIVE_ADD_HISTORY'
export const RECEIVE_CLEAR_HISTORY = 'RECEIVE_CLEAR_HISTORY'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function receiveNewDeck(title, deck) {
  return {
    type: RECEIVE_NEW_DECK,
    title,
    deck
  }
}

export function receiveRemoveAllDecks() {
  return {
    type: RECEIVE_REMOVE_ALL_DECKS,
    decks: {}
  }
}

export function receiveRemoveDeck(title) {
  return {
    type: RECEIVE_REMOVE_DECK,
    title
  }
}

export function receiveAddCard(title, card) {
  return {
    type: RECEIVE_ADD_CARD,
    title,
    card
  }
}

export function receiveHistory(history) {
  return {
    type: RECEIVE_HISTORY,
    history
  }
}

export function receiveAddHistory(result) {
  return {
    type: RECEIVE_ADD_HISTORY,
    result
  }
}

export function receiveClearHistory() {
  return {
    type: RECEIVE_CLEAR_HISTORY
  }
}