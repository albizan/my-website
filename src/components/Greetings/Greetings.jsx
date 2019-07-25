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
    <GreetingsStyleWrapper className="py-32">
      <div className="mx-auto px-8 md:w-3/5">
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          Hi, nice to meet you!
        </h3>
        <p className="mt-8 text-lg sm:text-xl font-semibold text-justify">
          Welcome on my website, I am glad you visited my personal space, here
          is where I am proud to show my skills, projects, past experiences and
          future hopes in the web development field.
        </p>
      </div>
    </GreetingsStyleWrapper>
  )
}

export default withTheme(Greetings)
