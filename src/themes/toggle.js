import theme from 'styled-theming'

/* Toggle Theme Colors */
export const toggleTextColor = theme('mode', {
  light: '#efefef',
  dark: '#f8d73a',
})
export const toggleHoverTextColor = theme('mode', {
  light: '#8c51c9',
  dark: '#202123',
})
export const toggleBorderColor = theme('mode', {
  light: '#efefef',
  dark: '#f8d73a',
})
export const toggleBackgroundColor = theme('mode', {
  light: '#8a4fc7',
  dark: '#29323c',
})
export const toggleHoverBackgroundColor = theme('mode', {
  light: '#efefef',
  dark: '#f8d73a',
})
