import theme from 'styled-theming'

/*
  Landing Overlay Colors
  On light theme, a gradient is used. This gradients overlays the image background of the Landing Section
  On dark theme, a dark overlay without gradient is applied. This is used to darken the background image
*/
export const overlayLighter = theme('mode', {
  light: '#111111',
  dark: '#111111',
})
export const overlayDarker = theme('mode', {
  light: '#111111',
  dark: '#111111',
})

/*
  These are the color used for Landing Page titles
*/
export const titleColor = theme('mode', {
  light: '#fff',
  dark: '#efefef',
})
