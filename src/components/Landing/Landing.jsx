import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom Imports */
import avatar from '../../assets/img/avatar.png'
import bg from '../../assets/img/bg.jpg'
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
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
  `
  const Overlay = styled.div`
    background-color: ${landingBackgroundDarker};
    background-image: linear-gradient(
      40deg,
      ${landingBackgroundLighter} 0%,
      ${landingBackgroundDarker} 90%
    );
    opacity: 0.6;
    z-index: 0;
  `

  return (
    <LandingStyleWrapper>
      <div className="h-screen flex flex-col justify-center items-center select-none relative">
        <Overlay className="absolute inset-0" />
        <div className="tracking-wider text-center font-semibold px-3 mt-20 z-10">
          <h1 className="text-3xl md:text-4xl">Alberto Zanotti</h1>
          <h2 className="text-lg md:text-xl">Junior web developer</h2>
        </div>
        <div className="w-24 h-24 sm:w-40 sm:w-40 mt-6 z-10">
          <img className="rounded-full" src={avatar} alt="my avatar" />
        </div>
      </div>
    </LandingStyleWrapper>
  )
}

export default withTheme(Landing)
