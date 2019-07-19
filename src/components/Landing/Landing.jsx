import React from 'react'
import styled, { withTheme } from 'styled-components'
import { backgroundColor, textColor } from '../../theme'

const Landing = () => {
  /* 
    Define wrapper for current component
    Used to theme component with styledComponets and styledTheming
  */
  const ThemedWrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor}
    margin: 0;
    padding: 0;
  `

  return (
    <ThemedWrapper>
      <div className="h-screen flex justify-center items-center">
        <h1>Hello World!</h1>
      </div>
    </ThemedWrapper>
  )
}

export default withTheme(Landing)
