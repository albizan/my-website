import React from 'react'

/* Custom Imports */
import Timeline from './TimeLine'
import Skills from './Skills'

const Resume = () => {
  return (
    <section className="container section-container">
      <h3 className="section-title">Resume</h3>
      <div className="block md:flex">
        <div className="w-full md:w-2/5 mb-16 md:mr-16">
          <h4 className="inline-block text-xl sm:text-2xl font-bold border-b-2 border-indigo-600 mb-8">
            Education
          </h4>
          <Timeline />
        </div>
        <div className="w-full md:w-3/5">
          <h4 className="inline-block text-xl sm:text-2xl font-bold border-b-2 border-indigo-600 mb-8">
            Coding Skills
          </h4>
          <Skills />
        </div>
      </div>
    </section>
  )
}

export default Resume
