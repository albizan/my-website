import theme from 'styled-theming'

/* 
  Define generic background color for both themes
  @light is a white background
  @dark is a dark-blueish-grey background
  Other background colors may be used in specific Section Theme files
*/
export const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#191919',
})

/* 
  Define generic text color for both themes
  @light is a dark gray color
  @dark is a very light grey color
  Other text colors may be used in specific Section Theme files
*/
export const textColor = theme('mode', {
  light: '#333',
  dark: '#fdfdfd',
})

/* 
  Define lighter text color, this may be applied to helper texts to define hierarchy in components
  @light is a gray color
  @dark is dirty tint of white
*/
export const textColorLighter = theme('mode', {
  light: '#718096',
  dark: '#a0aec0',
})

/* 
  Define darker text color, this may be applied to Section Titles to define hierarchy in components
  @light is a very dark gray color
  @dark is 100% white
*/
export const textColorDarker = theme('mode', {
  light: '#222',
  dark: '#fff',
})

/* 
  Define the main accent color for both themes
  @light is an indigo (blue-violet) color called 'Exodus Fruit'
  @dark is a special tint of red, called 'Watermelon'
  Other text colors or gradients may be used in specific Section Theme files
*/
export const accentColor = theme('mode', {
  light: '#7158e2', // Light Indigo
  dark: '#e74c3c', // Alizarin
})
