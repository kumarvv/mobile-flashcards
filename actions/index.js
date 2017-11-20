export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_NEW_DECK = 'RECEIVE_NEW_DECK'

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