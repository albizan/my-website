import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom Imports */
import {
  textColor,
  backgroundColor,
  accentColor,
  dividerColor,
} from '../../themes/base'

const Divider = styled.div`
  position: relative;
  background-color: ${dividerColor};
  width: 1px;
  margin-left: 0px;
  margin-right: 20px;
  padding: 0;
`

const Point = styled.div`
  position: absolute;
  top: 7px;
  left: -6px;
  right: 0;
  width: 14px;
  height: 14px;
  background-color: ${backgroundColor};
  border: 2px solid ${accentColor};
  border-radius: 50%;
`

const Resume = () => {
  return (
    <section className="container section-container">
      <h3 className="section-title">Resume</h3>
      <div className="block md:flex">
        <div className="w-full md:w-2/3 h-48 w-48">
          <h4 className="inline-block text-xl sm:text-2xl font-bold border-b-2 border-indigo-600 mb-8">
            Education
          </h4>
          <div id="timeline" className="flex">
            <div className="flex-none hidden sm:block">
              <div className="section-text">
                <p className="text-right">2015</p>
              </div>
            </div>
            <Divider className="sm:ml-2">
              <span className="text-transparent">.</span>
              <Point />
            </Divider>
            <div className="flex-grow">
              <div className="section-text">
                <p className="sm:hidden">2015</p>
                <p>High School Diploma</p>
                <p className="text-sm text-gray-700 font-base">
                  Scuola Internazionale Europea Statale Altiero Spinelli
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-48 w-48" />
      </div>
    </section>
  )
}

export default withTheme(Resume)
