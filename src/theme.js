import theme from 'styled-theming'

export const backgroundColorDarker = theme('mode', {
  light: '##efefef',
  dark: '#4f4f4f',
})

export const backgroundColorLighter = theme('mode', {
  light: '#F7F7F7',
  dark: '#202123',
})

export const textColor = theme('mode', {
  light: '#202123',
  dark: '#F7F7F7',
})

export const toggleBackgroundColor = theme('mode', {
  light: '#202123',
  dark: '#F7F7F7',
})

export const toggleTextColor = theme('mode', {
  light: '#F7F7F7',
  dark: '#202123',
})
