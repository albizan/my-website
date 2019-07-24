import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom imports */
import { baseTextColorInverted, accentColor } from '../../themes/base'

const PresentationStyleWrapper = styled.section`
  background-color: ${accentColor};
  color: ${baseTextColorInverted};
`

const Presentation = () => {
  return (
    <PresentationStyleWrapper className="relative flex items-center">
      <div className="absolute top-0 left-0 right-0 w-2/5 bg-gray-800 py-8 mx-auto -mt-10 rounded-lg flex justify-center items-center">
        <h2 className="text-lg sm:text-3xl font-bold">Who am I?</h2>
      </div>
      <div className="mx-auto px-8 py-20 md:w-3/5 text-center sm:text-lg font-thin">
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
