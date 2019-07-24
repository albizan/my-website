import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom Imports */
import {
  landingTextColor,
  landingBackgroundLighter,
  landingBackgroundDarker,
} from '../../themes/landing'

const Landing = () => {
  /* 
    Define wrapper for current component
    Used to theme component with styledComponents and styledTheming
  */
  const LandingStyleWrapper = styled.div`
    color: ${landingTextColor};
    background-color: ${landingBackgroundDarker};
    background-image: linear-gradient(
      45deg,
      ${landingBackgroundLighter} 0%,
      ${landingBackgroundDarker} 75%
    );
  `

  return (
    <LandingStyleWrapper>
      <div className="h-screen flex justify-center items-center select.none">
        <div className="tracking-wide text-center px-2">
          <p className="text-4xl md:text-5xl font-bold">
            Hello There! My name's Alberto
          </p>
          <p className="text-2xl md:text-3xl font-semibold">
            I am a junior web developer
          </p>
        </div>
      </div>
    </LandingStyleWrapper>
  )
}

export default withTheme(Landing)
