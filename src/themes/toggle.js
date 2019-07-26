import theme from 'styled-theming'

/* Toggle Theme Colors */
export const toggleTextColor = theme('mode', {
  light: '#6e45e2',
  dark: '#191919',
})
export const toggleBorderColor = theme('mode', {
  light: '#efefef',
  dark: '#6d5ce8',
})
export const toggleBackgroundColor = theme('mode', {
  light: '#efefef',
  dark: '#6d5ce8',
})

/* Hover */
export const toggleHoverTextColor = theme('mode', {
  light: '#6e45e2',
  dark: '#191919',
})
export const toggleHoverBackgroundColor = theme('mode', {
  light: '#efefef',
  dark: '#6d5ce8',
})
