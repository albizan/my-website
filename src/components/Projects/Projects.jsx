import React from 'react'
import styled, { withTheme } from 'styled-components'

import Project from './Project'

import { backgroundColor } from '../../themes/projects'

const Projects = () => {
  return (
    <section className="w-full">
      <div className="container section-container pb-0">
        <h3 className="section-title">Some stuff I enjoyed coding</h3>
      </div>
      <div className="w-full block sm:flex sm:justify-start sm:items-center sm:flex-wrap md:px-8 pb-16">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  )
}

export default withTheme(Projects)
