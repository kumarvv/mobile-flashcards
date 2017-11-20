import {
  RECEIVE_DECKS,
  RECEIVE_NEW_DECK
} from '../actions'

function entries(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case RECEIVE_NEW_DECK:
      return {
        ...state,
        decks: state.decks
          ? Object.assign(state.decks, {
            [action.title]: action.deck
          })
          : {
            [action.title]: action.deck
          }
      }

    default:
      return state
  }
}

export default entries
