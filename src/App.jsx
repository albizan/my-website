import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import ThemeToggle from './components/ThemeToggle'
import Landing from './components/Landing'
import Presentation from './components/Presentation/Presentation'
import Education from './components/Education/Education'
import Tools from './components/Tools'

/* Import Theme variables */
import { baseTextColor, baseBackgroundColor } from './themes/base'

function App() {
  /* Styling App with theme variables */
  const AppStyleWrapper = styled.section`
    font-family: 'Titillium Web';
    background-color: ${baseBackgroundColor};
    color: ${baseTextColor};
  `

  return (
    <AppStyleWrapper>
      <ThemeToggle />
      <Landing />
      <Presentation />
      <Education />
      <Tools />
    </AppStyleWrapper>
  )
}

/* Export HOC, use styled-theming to inject theme prop to App component */
export default withTheme(App)
