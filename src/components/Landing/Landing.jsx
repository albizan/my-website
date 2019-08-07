import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom Imports */
import avatar from '../../assets/img/avatar.png'
import bg from '../../assets/img/bg.jpg'
import { titleColor, overlayLighter, overlayDarker } from '../../themes/landing'

const Landing = () => {
  /* 
    Define wrapper for current component
    Used to theme component with styledComponents and styledTheming
  */
  const LandingStyleWrapper = styled.div`
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
  `
  const Overlay = styled.div`
    background-color: ${overlayDarker};
    background-image: linear-gradient(
      40deg,
      ${overlayLighter} 0%,
      ${overlayDarker} 90%
    );
    opacity: 0.6;
    z-index: 0;
  `
  const Title = styled.h1`
    color: ${titleColor};
  `
  const Subtitle = styled.h2`
    color: ${titleColor};
  `

  return (
    <LandingStyleWrapper>
      <div className="h-screen flex flex-col justify-center items-center select-none relative">
        <Overlay className="absolute inset-0" />
        <div className="tracking-wider text-center font-semibold px-3 mt-20 z-10">
          <Title className="text-3xl md:text-4xl">Alberto Zanotti</Title>
          <Subtitle className="text-lg md:text-xl">
            Junior web developer
          </Subtitle>
        </div>
        <div className="w-24 h-24 sm:w-40 sm:w-40 mt-6 z-10">
          <img className="rounded-full" src={avatar} alt="my avatar" />
        </div>
      </div>
    </LandingStyleWrapper>
  )
}

export default withTheme(Landing)
