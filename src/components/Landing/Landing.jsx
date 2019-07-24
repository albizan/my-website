import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom Imports */
import {
  landingBackgroundLighter,
  landingBackgroundDarker,
} from '../../themes/landing'

const Landing = () => {
  /* 
    Define wrapper for current component
    Used to theme component with styledComponents and styledTheming
  */
  const LandingStyleWrapper = styled.div`
    background-color: ${landingBackgroundDarker};
    background-image: linear-gradient(
      45deg,
      ${landingBackgroundLighter} 0%,
      ${landingBackgroundDarker} 100%
    );
  `

  return (
    <LandingStyleWrapper>
      <div className="h-screen flex justify-center items-center">
        <div className="mx-2 tracking-wide text-center text-white">
          <p className="text-2xl sm:text-3xl font-bold">
            Hello There! My name's Alberto
          </p>
          <p className="text-sm sm:text-xl font-thin">
            I am a junior web developer
          </p>
        </div>
      </div>
    </LandingStyleWrapper>
  )
}

export default withTheme(Landing)
