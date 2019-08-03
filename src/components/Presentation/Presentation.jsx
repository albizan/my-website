import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom imports */
import { titleColor } from '../../themes/base'
import {
  textColor,
  backgroundLighter,
  backgroundDarker,
} from '../../themes/presentation'

const GreetingsStyleWrapper = styled.section`
  color: ${textColor};
  background-color: ${backgroundDarker};
  background-image: linear-gradient(
    45deg,
    ${backgroundLighter} 0%,
    ${backgroundDarker} 85%
  );
`

const Title = styled.h3`
  color: ${titleColor};
  border-color: ${titleColor};
`

const Greetings = () => {
  return (
    <GreetingsStyleWrapper>
      <div className="container section-container">
        <Title className="section-title">Nice to meet you!</Title>
        <div className="section-text">
          <p>
            Welcome to my website, I am glad you visited my personal space, here
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
            back-end. I am currently study to become a fullstack developer with
            React and Nodejs.
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
