import theme from 'styled-theming'

export const backgroundColor = theme('mode', {
  light: '#fdfdfd',
  dark: '#000',
})

export const textColor = theme('mode', {
  light: '#333',
  dark: '#fdfdfd',
})

export const accentColor = theme('mode', {
  light: '#5a67d8',
  dark: '#5a67d8',
})

export const dividerColor = theme('mode', {
  light: '#718096',
  dark: '#718096',
})
