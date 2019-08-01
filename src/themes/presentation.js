import theme from 'styled-theming'

export const textColor = theme('mode', {
  light: '#2d3748',
  dark: '#000',
})

/* Background colors */
export const backgroundLighter = theme('mode', {
  light: '#fdfdfd',
  dark: '#f1c40f',
})
export const backgroundDarker = theme('mode', {
  light: '#fdfdfd',
  dark: '#ff7e55',
})
