import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import Landing from './components/Landing'
import { backgroundColor, textColor } from './theme'

function App() {
  const ThemedApp = styled.div`
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
