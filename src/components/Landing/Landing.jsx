import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom Imports */
import { backgroundColorDarker, textColor } from '../../theme'

const Landing = () => {
  /* 
    Define wrapper for current component
    Used to theme component with styledComponents and styledTheming
  */
  const LandingStyleWrapper = styled.div`
    background-color: ${backgroundColorDarker};
    color: ${textColor};
  `

  return (
    <LandingStyleWrapper>
      <div className="h-screen flex justify-center items-center">
        <p className="text-2xl sm:text-4xl text-center font-bold">
          Hi There! My name's Alberto
        </p>
      </div>
    </LandingStyleWrapper>
  )
}

export default withTheme(Landing)
