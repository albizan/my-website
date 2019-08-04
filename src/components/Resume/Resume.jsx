import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom Imports */
import Timeline from './TimeLine'

const Resume = () => {
  return (
    <section className="container section-container">
      <h3 className="section-title">Resume</h3>
      <div className="block md:flex">
        <div className="w-full md:w-2/3">
          <h4 className="inline-block text-xl sm:text-2xl font-bold border-b-2 border-indigo-600 mb-8">
            Education
          </h4>
          <Timeline />
        </div>
        <div className="w-full md:w-1/3" />
      </div>
    </section>
  )
}

export default withTheme(Resume)
