import React, {Component} from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { getHistory, clearHistory } from '../utils/api'
import { receiveHistory, receiveClearHistory } from '../actions/index'
import {gray, green, lightGray, red, white} from '../utils/colors'
import { RedButton } from './Buttons'
import sortBy from 'sort-by'

class History extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    getHistory()
      .then((history) => {
        dispatch(receiveHistory(history))
      })
  }

  onClearHistory() {
    const { dispatch } = this.props

    clearHistory()
      .then(() => dispatch(receiveClearHistory()))
  }

  render() {
    const { history } = this.props

    return (
      <View style={styles.container}>
        <ScrollView>
          {history && (
            Object.values(history)
              .sort(sortBy('-time'))
              .map((item) => (
              <View key={item.time} style={styles.items}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.time}>{new Date(item.time).toLocaleString()}</Text>
                </View>
                <View>
                  <Text style={styles.correct}>Correct: {item.correct}</Text>
                  <Text style={styles.incorrect}>Incorrect: {item.incorrect}</Text>
                </View>
              </View>
            ))
          )}
        </ScrollView>
        <View style={styles.buttons}>
          <RedButton
            label="Clear History"
            onPress={() => this.onClearHistory()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttons: {
    alignSelf: 'center'
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: white,
    borderBottomColor: lightGray,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 18,
  },
  time: {
    fontSize: 14,
    color: gray
  },
  correct: {
    color: green
  },
  incorrect: {
    color: red
  }
})

const mapStateToProps = ({ history }) => ({ history })

export default connect(mapStateToProps)(History)
