import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import Landing from './components/Landing'
import ThemeToggle from './components/ThemeToggle'
import { baseTextColor, baseBackgroundColor } from './themes/base'

function App() {
  /* Styling App with theme variables */
  const AppStyleWrapper = styled.div`
    font-family: 'utopia-std';
    font-size: 1rem;
    background-color: ${baseBackgroundColor};
    color: ${baseTextColor};
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
