import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { black, gray, white } from '../utils/colors'
import { BlackButton, WhiteButton } from './Buttons'

class DeckInfo extends Component {
  render() {
    const { deck } = this.props.navigation.state.params
    const { decks, navigation } = this.props

    const deckInfo = decks && deck
      ? decks[deck.title]
      : deck

    return (
      <View style={styles.deckContainer}>
        {deckInfo && (
          <View style={styles.deckDetail}>
            <View>
              <Text style={styles.title}>
                {deckInfo.title}
              </Text>
              <Text style={styles.subtitle}>
                {deckInfo.questions
                  ? deckInfo.questions.length
                  : 0} cards
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <WhiteButton
                label="Create New Question"
                style={{ width: 200 }}
                onPress={() => navigation.navigate(
                  'AddCard',
                  { deck: deckInfo }
                )}
              />
              { deckInfo && deckInfo.questions && deckInfo.questions.length > 0 && (
                <BlackButton
                  label="Start a Quiz"
                  style={{ width: 200 }}
                  onPress={() => navigation.navigate(
                    'Quiz',
                    { deck: deckInfo }
                  )}
                />
              )}
            </View>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    backgroundColor: white
  },
  deckDetail: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: black,
    textAlign: 'center',
    padding: 10
  },
  subtitle: {
    fontSize: 22,
    color: gray,
    textAlign: 'center'
  }
})

const mapStateToProps = ({ decks }) => ({ decks })

export default connect(mapStateToProps)(DeckInfo)
