import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom imports */
import {
  textColor,
  backgroundLighter,
  backgroundDarker,
} from '../../themes/greetings'

const GreetingsStyleWrapper = styled.section`
  color: ${textColor};
  background-color: ${backgroundDarker};
  background-image: linear-gradient(
    45deg,
    ${backgroundLighter} 0%,
    ${backgroundDarker} 85%
  );
`

const Greetings = () => {
  return (
    <GreetingsStyleWrapper className="py-20 md:py-24">
      <div className="mx-auto px-8 md:w-3/5">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Nice to meet you!
        </h3>
        <div className="text-lg sm:text-xl font-semibold text-justify">
          <p>
            Welcome on my website, I am glad you visited my personal space, here
            is where I am proud to show my skills, projects, past experiences
            and future hopes in the web development field.
          </p>
          <p>
            My name is Aberto Zanotti, I am a 23 years old geek located in
            beautiful Turin, Italy.
          </p>
          <p>
            I got my bachelor degree in Computer Science at the Politecnico di
            Turin, year 2018.
          </p>
          <p>
            I love new web technologies, both on the front-end and on the
            back-end. I am currently study to become a fullstack developer.
          </p>
          <p>
            I'm persistent, curious and continuosly working on improving my
            capabilities.
          </p>
        </div>
      </div>
    </GreetingsStyleWrapper>
  )
}

export default withTheme(Greetings)
