import theme from 'styled-theming'

export const baseBackgroundColor = theme('mode', {
  light: '#fdfdfd',
  dark: '#000',
})

export const baseTextColor = theme('mode', {
  light: '#333',
  dark: '#fdfdfd',
})

export const baseTextColorInverted = theme('mode', {
  light: '#fdfdfd',
  dark: '#393d46',
})

export const titleColor = theme('mode', {
  light: '#5a67d8',
  dark: '#5a67d8',
})
