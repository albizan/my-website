import theme from 'styled-theming'

/* Toggle Theme Colors */
export const textColor = theme('mode', {
  light: '#fdfdfd',
  dark: '#333',
})

export const backgroundColor = theme('mode', {
  light: '#7158e2',
  dark: '#e74c3c', // Alizarin
})
