import theme from 'styled-theming'

/* Toggle Theme Colors */
export const textColor = theme('mode', {
  light: '#6c5ce7', // Light accent color -> 'Watermelon'
  dark: '#333',
})

export const backgroundColor = theme('mode', {
  light: '#fdfdfd',
  dark: '#ff4757', // Dark accent color -> 'Watermelon'
})
