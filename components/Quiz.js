import React, {Component} from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, red, white, green } from '../utils/colors'
import { receiveHistory, receiveAddHistory } from '../actions/index'
import { getHistory, addToHistory } from '../utils/api'
import { BlackButton, GreenButton, RedButton, WhiteButton } from './Buttons'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  state = {
    index: 0,
    showAnswer: false,
    time: '',
    correct: 0,
    incorrect: 0,
    done: false
  }

  componentDidMount() {
    const { dispatch } = this.props

    getHistory()
      .then((history) => dispatch(receiveHistory(history)))
  }

  switchAnswer = () => {
    const { showAnswer } = this.state

    this.setState(() => ({
      showAnswer: !showAnswer
    }))
  }

  submitSelection = (correctAns) => {
    const { dispatch } = this.props
    const { deck } = this.props.navigation.state.params

    if (deck && deck.questions && this.state.index < deck.questions.length) {
      let index = this.state.index +1
      let correct = correctAns ? this.state.correct + 1 : this.state.correct
      let incorrect = correctAns ? this.state.incorrect : this.state.incorrect + 1

      this.setState(() => ({
        index,
        correct,
        incorrect
      }))

      if (index === deck.questions.length) {
        const result = {
          time: new Date().getTime(),
          title: deck.title,
          correct,
          incorrect
        }

        addToHistory(result)
          .then(() => {
            dispatch(receiveAddHistory(result))

            this.setState(() => ({
              time: result.time,
              done: true
            }))
          })

        clearLocalNotification()
          .then(setLocalNotification)
      }
    }
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  restartQuiz = () => {
    this.setState(() => ({
      index: 0,
      correct: 0,
      incorrect: 0,
      done: false
    }))
  }

  renderResult() {
    const { time, correct, incorrect } = this.state
    const { deck } = this.props.navigation.state.params

    return (
      <View style={styles.doneContainer}>
        <Text style={{
          fontSize: 36,
          fontWeight: 'bold'
        }}>
          {deck.title}
        </Text>
        <Text style={{
          fontSize: 20,
          color: gray
        }}>
          {new Date(time).toLocaleString()}
        </Text>
        <Text style={{
          marginTop: 20,
          fontSize: 22,
          color: green
        }}>
          Correct: {correct}
        </Text>
        <Text style={{
          fontSize: 22,
          color: red,
          marginBottom: 20
        }}>
          Incorrect: {incorrect}
        </Text>
        <WhiteButton
          label="Restart Quiz"
          onPress={() => this.restartQuiz()}
        />
        <BlackButton
          label="Back to Deck"
          onPress={() => this.goBack()}
        />
      </View>
    )
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { index, showAnswer, done } = this.state

    const question = deck && deck.questions && deck.questions.length > index
      ? deck.questions[index].question
      : null

    const answer = deck && deck.questions && deck.questions.length > index
      ? deck.questions[index].answer
      : null

    if (done) {
      return this.renderResult()
    }

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
                Show {showAnswer
                  ? 'Question'
                  : 'Answer'
                }
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <GreenButton
              label="Correct"
              onPress={() => this.submitSelection(true)}
            />
            <RedButton
              label="Incorrect"
              onPress={() => this.submitSelection(false)}
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
    fontSize: 20,
    color: red
  },
  doneContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  }
})

function mapStateToProps({ history }) {
  return {
    history
  }
}

export default connect(mapStateToProps)(Quiz)
