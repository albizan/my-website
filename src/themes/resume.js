import theme from 'styled-theming'

/* 
  Define the color of the thin divider in Timeline component
*/
export const dividerColor = theme('mode', {
  light: '#dfe4ea', // Grey ultralight tint called 'City Lights'
  dark: '#ff4757', // 'Watermelon dark accent color'
})
