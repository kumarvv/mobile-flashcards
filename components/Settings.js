import React, {Component} from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { gray, red, white } from '../utils/colors'
import { removeAll, removeDeck } from '../utils/api'
import { receiveRemoveAllDecks, receiveRemoveDeck } from '../actions/index'
import { RedButton } from './Buttons'

class Settings extends Component {
  onRemoveAllDecks = () => {
    const { dispatch } = this.props

    removeAll()
      .then(dispatch(receiveRemoveAllDecks()))
  }

  onRemoveDeck = (title) => {
    const { dispatch } = this.props

    removeDeck(title)
      .then(dispatch(receiveRemoveDeck(title)))
  }

  render() {
    const { decks } = this.props

    const decksCount = decks
      ? Object.keys(decks).length
      : 0

    return (
      <ScrollView>
        {decks && (
          <View style={styles.container}>
            {Object.keys(decks).map(title => (
              <View key={title} style={styles.deck}>
                <Text style={styles.deckTitle}>
                  {title}
                </Text>
                <RedButton
                  label="X"
                  style={{
                    width: 30,
                    height: 30
                  }}
                  textStyle={{
                    fontSize: 12
                  }}
                  onPress={() => this.onRemoveDeck(title)}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: white,
    padding: 15
  },
  deck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: gray,
    borderBottomWidth: 1,
    padding: 5
  },
  deckTitle: {
    fontSize: 20
  }
})

const mapStateToProps = ({ decks }) => ({ decks })

export default connect(mapStateToProps)(Settings)
