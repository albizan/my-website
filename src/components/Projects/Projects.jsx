import React from 'react'
import styled, { withTheme } from 'styled-components'

import Project from './Project'

import { backgroundColor } from '../../themes/projects'

const Projects = () => {
  const ProjectsSection = styled.section`
    background-color: ${backgroundColor};
  `
  return (
    <ProjectsSection className="w-full">
      <div className="container section-container pb-0">
        <h3 className="section-title">Some stuff I enjoyed coding</h3>
      </div>
      <div className="w-full block md:flex md:justify-start md:items-center md:flex-wrap md:px-8 pb-16">
        <Project />
        <Project />
        <Project />
      </div>
    </ProjectsSection>
  )
}

export default withTheme(Projects)
