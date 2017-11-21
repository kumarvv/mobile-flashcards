import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class TextButton extends Component {
  render() {
    const { label, onPress, style, textStyle } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, style]}>
          <Text style={[styles.buttonText, textStyle]}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    width: 150,
    padding: 10,
    overflow: 'hidden',
    alignSelf: 'flex-end'
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  }
})

export default TextButton
