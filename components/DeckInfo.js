import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {black, gray, white} from "../utils/colors"
import TextButton from './TextButton'

class DeckInfo extends Component {
  render() {
    const { deck } = this.props.navigation.state.params
    const { navigation } = this.props

    return (
      <View style={styles.deckContainer}>
        {deck && (
          <View style={styles.deckDetail}>
            <View/>
            <View>
              <Text style={styles.title}>
                {deck.title}
              </Text>
              <Text style={styles.subtitle}>
                {deck.questions
                  ? deck.questions.length
                  : 0} cards
              </Text>
            </View>
            <View>
              <TextButton
                label="Add Card"
                onPress={() => navigation.navigate(
                  'AddCard',
                  { deck: deck }
                )}
              />
              { deck && deck.questions && deck.questions.length > 0 && (
                <TextButton
                  label="Start Quiz"
                  style={{
                    backgroundColor: black
                  }}
                  textStyle={{
                    color: white
                  }}
                  onPress={() => navigation.navigate(
                    'Quiz',
                    { deck: deck }
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: black,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 22,
    color: gray,
    textAlign: 'center'
  }
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckInfo)
