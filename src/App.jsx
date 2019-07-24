import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import ThemeToggle from './components/ThemeToggle'
import Landing from './components/Landing'
import Greetings from './components/Greetings/Greetings'
import Presentation from './components/Presentation/Presentation'

/* Import Theme variables */
import { baseTextColor, baseBackgroundColor } from './themes/base'

function App() {
  /* Styling App with theme variables */
  const AppStyleWrapper = styled.section`
    font-family: 'utopia-std';
    background-color: ${baseBackgroundColor};
    color: ${baseTextColor};
  `

  return (
    <AppStyleWrapper>
      <ThemeToggle />
      <Landing />
      <Greetings />
      <Presentation />
    </AppStyleWrapper>
  )
}

/* Export HOC, use styled-theming to inject theme prop to App component */
export default withTheme(App)
