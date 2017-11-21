import {
  RECEIVE_DECKS,
  RECEIVE_NEW_DECK,
  RECEIVE_REMOVE_ALL_DECKS,
  RECEIVE_REMOVE_DECK,
  RECEIVE_ADD_CARD,
  RECEIVE_ADD_HISTORY,
  RECEIVE_HISTORY,
  RECEIVE_CLEAR_HISTORY
} from '../actions'
import { deleteKey, addCardToDeckCards } from '../utils/helpers'

function entries(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      }

    case RECEIVE_NEW_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.title]: action.deck
        }
      }

    case RECEIVE_REMOVE_ALL_DECKS:
      return {
        ...state,
        decks: {}
      }

    case RECEIVE_REMOVE_DECK:
      return {
        ...state,
        decks: {
          ...deleteKey(state.decks, action.title)
        }
      }

    case RECEIVE_ADD_CARD:
      return {
        ...state,
        decks: addCardToDeckCards(state.decks, action.title, action.card)
      }

    case RECEIVE_HISTORY:
      return {
        ...state,
        history: {
          ...action.history
        }
      }

    case RECEIVE_ADD_HISTORY:
      return {
        ...state,
        history: {
          ...state.history,
          [action.result.time]: action.result
        }
      }

    case RECEIVE_CLEAR_HISTORY:
      return {
        ...state,
        history: {}
      }

    default:
      return state
  }
}

export default entries
