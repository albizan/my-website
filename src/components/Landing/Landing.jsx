import React from 'react'
import styled, { withTheme } from 'styled-components'
import Typist from 'react-typist'

/* Custom Imports */
import { backgroundColorDarker, textColor } from '../../theme'

const Landing = () => {
  /* 
    Define wrapper for current component
    Used to theme component with styledComponents and styledTheming
  */
  const ThemedWrapper = styled.div`
    background-color: ${backgroundColorDarker};
    color: ${textColor};
  `

  return (
    <ThemedWrapper>
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="text-xl sm:text-3xl">Hello World!</p>
        <Typist
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 250,
          }}
          className="text-sm sm:text-xl text-center"
        >
          <Typist.Delay ms={750} />
          My name is Alberto Zanotti
          <Typist.Delay ms={500} />
          <br />
          <span>I am a junior web developer</span>
          <Typist.Delay ms={500} />
          <br />
          <span>I love new web technologies</span>
          <Typist.Delay ms={500} />
          <span> such as React, Tailwindcss and PHP</span>
          <Typist.Backspace count={3} delay={100} />
          <span>Node.js</span>
        </Typist>
      </div>
    </ThemedWrapper>
  )
}

export default withTheme(Landing)
