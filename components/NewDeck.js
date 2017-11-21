import React, {Component} from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { receiveNewDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { gray, white } from '../utils/colors'
import { NavigationActions } from 'react-navigation'
import { BlackButton } from './Buttons'

class NewDeck extends Component {
  state = {
    title: ''
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({
      key: 'NewDeck'
    }))
  }

  onSubmit = () => {
    const { title } = this.state
    const { dispatch } = this.props

    if (!title || title === '') {
      Alert.alert('Warning', 'Deck Title is required')
      return
    }

    saveDeckTitle(title)
      .then(() => {
        dispatch(receiveNewDeck(title, {
          title: title,
          questions: []
        }))

        this.setState(() => ({
          title: ''
        }))

        this.toHome()
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View/>
        <View>
          <Text style={styles.title}>
            What is the title of your new deck?
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(title) => this.setState(() => ({title}))}
            value={this.state.title}
            placeholder="Deck Title"
            autoFocus={true}
          />
        </View>
        <View>
          <BlackButton
            label="Submit"
            onPress={() => this.onSubmit()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: white,
    paddingBottom: 20
  },
  title: {
    fontSize: 26,
    textAlign: 'center'
  },
  input: {
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 5,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    width: 300,
    height: 40,
    margin: 10,
    padding: 10
  }
})

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(NewDeck)
