import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom imports */
import { accentColor } from '../../themes/base'
import {
  textColor,
  backgroundLighter,
  backgroundDarker,
} from '../../themes/presentation'

const PresentationStyleWrapper = styled.section`
  color: ${textColor};
  background-color: ${backgroundDarker};
  background-image: linear-gradient(
    45deg,
    ${backgroundLighter} 0%,
    ${backgroundDarker} 90%
  );
`

const Presentation = () => {
  return (
    <PresentationStyleWrapper className="flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Who am I?</h2>
      <div className="mx-auto px-8 md:w-3/5 text-justify text-lg sm:text-xl font-semibold">
        <p>
          My name is Aberto Zanotti, I am a 23 years old geek located in
          beautiful Turin, Italy
        </p>
        <p>
          I got my bachelor degree in Computer Science at the Politecnico di
          Turin, year 2018
        </p>
        <p>
          I love new web technologies, both on the front-end and on the
          back-end. I am currently study to become a fullstack developer
        </p>
        <p>
          I'm persistent, curious and continuosly working on improving my
          capabilities.
        </p>
      </div>
    </PresentationStyleWrapper>
  )
}

export default withTheme(Presentation)
