import theme from 'styled-theming'

/* Landing Colors */
export const baseBackgroundColor = theme('mode', {
  light: '#fdfdfd',
  dark: '#393d46',
})

export const baseTextColor = theme('mode', {
  light: '#393d46',
  dark: '#fdfdfd',
})

export const baseTextColorInverted = theme('mode', {
  light: '#fdfdfd',
  dark: '#393d46',
})

export const accentColor = theme('mode', {
  light: '#6c5ce7',
  dark: '#ec625f',
})
