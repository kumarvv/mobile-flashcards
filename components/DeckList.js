import React, {Component} from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { getDecks } from "../utils/api"
import { black, gray, white } from "../utils/colors"

const Deck = ({ deck, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate(
      'DeckInfo',
      { deck: deck }
    )}>
    <View style={styles.deck}>
      <Text style={styles.deckTitle}>
        {deck.title}
      </Text>
      <Text style={styles.deckSubtitle}>
        {deck.questions
          ? deck.questions.length
          : 0} cards
      </Text>
    </View>
  </TouchableOpacity>
)

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }

  render() {
    const { decks, navigation } = this.props

    return (
      <ScrollView style={styles.container}>
        {decks && (
          <View>
            {Object.values(decks).map((deck) => (
              <Deck
                deck={deck}
                navigation={navigation}
                key={deck.title}
              />
            ))}
          </View>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: white
  },
  deckList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  deckBoxed: {
    margin: 5,
    padding: 10,
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 5,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  deck: {
    padding: 20,
    borderColor: gray,
    borderBottomWidth: 1
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: black,
    textAlign: 'center',
  },
  deckSubtitle: {
    fontSize: 17,
    color: gray,
    textAlign: 'center',
  }
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
