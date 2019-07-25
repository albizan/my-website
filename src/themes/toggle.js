import theme from 'styled-theming'

/* Toggle Theme Colors */
export const toggleTextColor = theme('mode', {
  light: '#efefef',
  dark: '#f50045',
})
export const toggleHoverTextColor = theme('mode', {
  light: '#6c5ce7',
  dark: '#efefef',
})
export const toggleBorderColor = theme('mode', {
  light: '#efefef',
  dark: '#f50045',
})
export const toggleBackgroundColor = theme('mode', {
  light: '#6c5ce7',
  dark: '#29323c',
})
export const toggleHoverBackgroundColor = theme('mode', {
  light: '#efefef',
  dark: '#f50045',
})
