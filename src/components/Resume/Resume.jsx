import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom Imports */
import Timeline from './TimeLine'
import Skills from './Skills'

import { accentColor } from '../../themes/base'

const SectionSubtitle = styled.h4`
  border-color: ${accentColor};
`

const Resume = () => {
  return (
    <section className="container section-container">
      <h3 className="section-title">Resume</h3>
      <div className="block md:flex">
        <div className="w-full md:w-1/2 mb-16 md:mr-16">
          <SectionSubtitle className="inline-block text-lg sm:text-xl font-semibold border-b-2 mb-8">
            Education
          </SectionSubtitle>
          <Timeline />
        </div>
        <div className="w-full md:w-1/2">
          <SectionSubtitle className="inline-block text-lg sm:text-xl font-semibold border-b-2 mb-8">
            Coding Skills
          </SectionSubtitle>
          <Skills />
        </div>
      </div>
    </section>
  )
}

export default withTheme(Resume)
