import theme from 'styled-theming'

export const backgroundColor = theme('mode', {
  light: '#F7F7F7',
  dark: '#202123',
})

export const textColor = theme('mode', {
  light: '#202123',
  dark: '#F7F7F7',
})
