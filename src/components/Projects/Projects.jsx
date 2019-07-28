import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom imports */
import {
  textColor,
  backgroundLighter,
  backgroundDarker,
} from '../../themes/projects'

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
    <ProjectsStyleWrapper className="py-32">
      <h3 className="text-3xl sm:text-4xl font-bold text-center">
        Some stuff I enjoyed coding!
      </h3>
    </ProjectsStyleWrapper>
  )
}

export default withTheme(Projects)
