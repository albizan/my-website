import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import Landing from './components/Landing'
import { backgroundColor, textColor } from './theme'

function App() {
  /* Define The Wrapper of the App, used to theme generic backgrounds and text color */
  const ThemedApp = styled.div`
    font-family: 'Quicksand';
    background-color: ${backgroundColor};
    color: ${textColor};
  `

  return (
    <ThemedApp>
      <Landing />
    </ThemedApp>
  )
}

/* Export HOC, use styled-theming */
export default withTheme(App)
