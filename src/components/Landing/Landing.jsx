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
        <div className="mx-4 tracking-wide text-center ">
          <p className="text-xl sm:text-3xl font-bold">
            Hello There! My name's Alberto
          </p>
          <p className="sm:text-xl font-thin">I am a junior web developer</p>
        </div>
      </div>
    </LandingStyleWrapper>
  )
}

export default withTheme(Landing)
