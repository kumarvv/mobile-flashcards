import React, {Component} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { receiveNewDeck } from '../actions'
import { addDeck } from '../utils/api'
import {black, white} from "../utils/colors"
import TextButton from './TextButton'
import { NavigationActions } from 'react-navigation'

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

    const deck = {
      title,
      questions: []
    }

    addDeck(title, deck)
      .then(() => {
        receiveNewDeck(title, deck)
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
          />
        </View>
        <TextButton
          label="Submit"
          style={{
            backgroundColor: black
          }}
          textStyle={{
            color: white
          }}
          onPress={() => this.onSubmit()}
        />
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
    borderColor: black,
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

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    receiveNewDeck: (title) => dispatch(receiveNewDeck(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
