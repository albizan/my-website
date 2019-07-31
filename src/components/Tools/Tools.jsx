import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom imports */
import Tool from './Tool'

import {
  textColor,
  backgroundLighter,
  backgroundDarker,
} from '../../themes/projects'

import vscodeLogo from '../../assets/img/logos/vscode.png'
import tailwindLogo from '../../assets/img/logos/tailwind.png'
import reactLogo from '../../assets/img/logos/react.png'
import nodeLogo from '../../assets/img/logos/node.png'
import nestLogo from '../../assets/img/logos/nest.png'

const ProjectsStyleWrapper = styled.section`
  color: ${textColor};
  background-color: ${backgroundDarker};
  background-image: linear-gradient(
    45deg,
    ${backgroundLighter} 0%,
    ${backgroundDarker} 85%
  );
`

const Projects = () => {
  return (
    <ProjectsStyleWrapper className="flex flex-col items-center justify-center py-32">
      <h3 className="text-3xl sm:text-4xl font-bold mb-8">
        Tools and Tech I love to use
      </h3>
      <div className="mx-auto px-8 md:w-4/5 text-justify text-lg sm:text-xl font-semibold">
        <div className="md:flex flex-wrap items-center justify-center text-center">
          <Tool
            logoUrl={vscodeLogo}
            item="VsCode"
            text="My favourite code editor, clean UI, great themes and a lot of usefull extensions"
          />
          <Tool
            logoUrl={reactLogo}
            item="Reactjs"
            text="I love building UIs with this fantastic front-end library"
          />
          <Tool
            logoUrl={tailwindLogo}
            item="Tailwind"
            text="Utility First CSS FTW!"
          />
          <Tool
            logoUrl={nodeLogo}
            item="Nodejs"
            text="Asynchronous, fast, lot of great packages... What else!"
          />
          <Tool
            logoUrl={nestLogo}
            item="Nestjs"
            text="Because of its out-of-the-box application architecture, oh and Typescript"
          />
        </div>
      </div>
    </ProjectsStyleWrapper>
  )
}

export default withTheme(Projects)
