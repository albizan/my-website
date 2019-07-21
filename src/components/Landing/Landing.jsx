import React from 'react'
import styled, { withTheme } from 'styled-components'
import { backgroundColorDarker, textColor } from '../../theme'

const Landing = () => {
  /* 
    Define wrapper for current component
    Used to theme component with styledComponents and styledTheming
  */
  const ThemedWrapper = styled.div`
    background-color: ${backgroundColorDarker};
    color: ${textColor};
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
