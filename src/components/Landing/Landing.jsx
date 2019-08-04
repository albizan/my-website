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
    /* background-color: ${landingBackgroundDarker};
    background-image: linear-gradient(
      40deg,
      ${landingBackgroundLighter} 0%,
      ${landingBackgroundDarker} 90%
    ); */
  `
  const Overlay = styled.div`
    background-color: ${landingBackgroundDarker};
    background-image: linear-gradient(
      40deg,
      ${landingBackgroundLighter} 0%,
      ${landingBackgroundDarker} 90%
    );
    opacity: 0.7;
    z-index: 0;
  `

  return (
    <LandingStyleWrapper>
      <div className="h-screen flex flex-col justify-center items-center select-none relative">
        <Overlay className="absolute inset-0" />
        <div className="tracking-wide text-center px-3 mt-24 z-10">
          <p className="text-4xl md:text-5xl font-bold">
            Hello There! My name's Alberto
          </p>
          <p className="text-2xl md:text-3xl font-semibold">
            I am a junior web developer
          </p>
        </div>
        <div className="w-32 h-32 sm:w-48 sm:w-48 mt-8 z-10">
          <img className="rounded-full" src={avatar} alt="my avatar" />
        </div>
      </div>
    </LandingStyleWrapper>
  )
}

export default withTheme(Landing)
