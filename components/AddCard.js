import React, {Component} from 'react'
import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import {black, gray, white} from '../utils/colors'
import { addCardToDeck } from '../utils/api'
import { receiveAddCard } from '../actions/index'
import { BlackButton } from './Buttons'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  onAddCard() {
    const { dispatch } = this.props
    const { deck } = this.props.navigation.state.params
    const { question, answer } = this.state

    if (!question || question === '' || !answer || answer === '') {
      Alert.alert('Warning', 'Question and Answer are required')
      return
    }

    addCardToDeck(deck.title, { question, answer })
      .then(() => {
        dispatch(receiveAddCard(deck.title, {question, answer}))

        this.goBack()
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={2}
            onChangeText={(question) => this.setState(() => ({question}))}
            value={this.state.question}
            placeholder="Question"
          />
          <TextInput
            style={[styles.input, {height: 80}]}
            multiline={true}
            numberOfLines={4}
            onChangeText={(answer) => this.setState(() => ({answer}))}
            value={this.state.answer}
            placeholder="Answer"
          />
        </View>
        <View>
          <BlackButton
            label="Submit"
            onPress={() => this.onAddCard()}
          />
        </View>
        <View/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20
  },
  input: {
    fontSize: 20,
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
    height: 60,
    margin: 10,
    padding: 10
  }
})

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddCard)
