import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import ThemeToggle from './components/ThemeToggle'
import Landing from './components/Landing'
import Presentation from './components/Presentation'
import Resume from './components/Resume'
import Tools from './components/Tools'

/* Import Theme variables */
import { textColor, backgroundColor } from './themes/base'

function App() {
  /* Styling App with theme variables */
  const AppStyleWrapper = styled.section`
    font-family: 'Titillium Web';
    background-color: ${backgroundColor};
    color: ${textColor};
  `

  return (
    <AppStyleWrapper>
      <ThemeToggle />
      <Landing />
      <Presentation />
      <Resume />
      <Tools />
    </AppStyleWrapper>
  )
}

/* Export HOC, use styled-theming to inject theme prop to App component */
export default withTheme(App)
