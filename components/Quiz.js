import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red, white, green } from "../utils/colors"
import TextButton from "./TextButton"

class Quiz extends Component {
  state = {
    index: 0,
    showAnswer: false
  }

  switchAnswer = () => {
    const { showAnswer } = this.state

    this.setState(() => ({
      showAnswer: !showAnswer
    }))
  }

  moveToNext = () => {
    const { index } = this.state
    const { deck } = this.props.navigation.state.params

    if (deck && deck.questions && index < deck.questions.length -1) {
      this.setState(() => ({
        index: index+1
      }))
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { index, showAnswer } = this.state

    const question = deck && deck.questions && deck.questions.length > index
      ? deck.questions[index].question
      : null

    const answer = deck && deck.questions && deck.questions.length > index
      ? deck.questions[index].answer
      : null

    return (
      <View style={styles.container}>
        <Text style={styles.counter}>
          {`${index+1}/${deck.questions.length}`}
        </Text>
        <View style={styles.quizContainer}>
          <View/>
          <View style={{
            alignItems: 'center'
          }}>
            <Text style={styles.question}>
              {showAnswer
                ? answer
                : question
              }
            </Text>
            <TouchableOpacity onPress={() => this.switchAnswer()}>
              <Text style={styles.answerLink}>
                {showAnswer
                  ? 'Question'
                  : 'Answer'
                }
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextButton
              label="Correct"
              style={{
                backgroundColor: green,
                borderColor: green
              }}
              textStyle={{
                color: white
              }}
              onPress={() => this.moveToNext()}
            />
            <TextButton
              label="Incorrect"
              style={{
                backgroundColor: red,
                borderColor: red
              }}
              textStyle={{
                color: white
              }}
              onPress={() => this.moveToNext()}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: white
  },
  counter: {
    fontSize: 20,
    padding: 10
  },
  quizContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25
  },
  question: {
    fontSize: 36,
    textAlign: 'center',
    padding: 20
  },
  answerLink: {
    fontSize: 24,
    color: red
  }
})

export default Quiz
