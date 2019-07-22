import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import Landing from './components/Landing'
import ThemeToggle from './components/ThemeToggle'
import { backgroundColorDarker, textColor } from './theme'

function App() {
  /* Styling App with theme variables */
  const AppStyleWrapper = styled.div`
    font-family: 'Quicksand';
    font-size: 1rem;
    background-color: ${backgroundColorDarker};
    color: ${textColor};
  `

  return (
    <AppStyleWrapper>
      <ThemeToggle />
      <Landing />
    </AppStyleWrapper>
  )
}

/* Export HOC, use styled-theming to inject theme prop to App component */
export default withTheme(App)
