import React from 'react'
import { black, white, red, green } from '../utils/colors'
import TextButton from './TextButton'

export const WhiteButton = ({ style, textStyle, ...other }) => (
  <TextButton
    style={[style, {
      backgroundColor: white,
      borderColor: black
    }]}
    textStyle={[textStyle, {
      color: black
    }]}
    {...other}
  />
)

export const BlackButton = ({ style, textStyle, ...other }) => (
  <TextButton
    style={[style, {
      backgroundColor: black,
      borderColor: black,
    }]}
    textStyle={[textStyle, {
      color: white
    }]}
    {...other}
  />
)

export const RedButton = ({ style, textStyle, ...other }) => (
  <TextButton
    style={[style, {
      backgroundColor: red,
      borderColor: red
    }]}
    textStyle={[textStyle, {
      color: white
    }]}
    {...other}
  />
)

export const GreenButton = ({ style, textStyle, ...other }) => (
  <TextButton
    style={[style, {
      backgroundColor: green,
      borderColor: green
    }]}
    textStyle={[textStyle, {
      color: white
    }]}
    {...other}
  />
)
