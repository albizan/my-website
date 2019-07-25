import theme from 'styled-theming'

export const baseBackgroundColor = theme('mode', {
  light: '#fdfdfd',
  dark: '#000',
})

export const baseTextColor = theme('mode', {
  light: '#393d46',
  dark: '#fdfdfd',
})

export const baseTextColorInverted = theme('mode', {
  light: '#fdfdfd',
  dark: '#393d46',
})
