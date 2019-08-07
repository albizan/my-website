import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Import theme colors */
import {
  accentColor,
  backgroundColor,
  textColorLighter,
} from '../../../themes/base'
import { dividerColor } from '../../../themes/resume'

const Divider = styled.div`
  position: relative;
  background-color: ${dividerColor};
  width: 1px;
`

const Point = styled.div`
  position: absolute;
  top: 8px;
  left: -6px;
  right: 0;
  width: 14px;
  height: 14px;
  background-color: ${backgroundColor};
  border: 2px solid ${accentColor};
  border-radius: 50%;
`

const SchoolName = styled.p`
  color: ${textColorLighter};
`

const Timeline = () => {
  return (
    <div className="flex flex-col">
      <div id="timeline" className="flex">
        <div className="flex-none hidden sm:block mr-4">
          <div className="section-text">
            <p className="text-right">2015</p>
          </div>
        </div>
        <Divider className="mr-4">
          <span className="text-transparent">divider</span>
          <Point />
        </Divider>
        <div className="flex-grow">
          <div className="section-text text-left">
            <p className="sm:hidden">2015</p>
            <p>High School Diploma</p>
            <SchoolName className="text-base font-normal mb-10">
              Scuola Internazionale Europea Statale Altiero Spinelli
            </SchoolName>
          </div>
        </div>
      </div>

      {/* Second Itemd */}
      <div id="timeline" className="flex">
        <div className="flex-none hidden sm:block mr-4">
          <div className="section-text">
            <p className="text-right">2018</p>
          </div>
        </div>
        <Divider className="mr-4">
          <span className="text-transparent">.</span>
          <Point />
        </Divider>
        <div className="flex-grow">
          <div className="section-text text-left">
            <p className="sm:hidden">2018</p>
            <p>Bachelor Degree</p>
            <SchoolName className="text-base font-base">
              Politecnico di Torino
            </SchoolName>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTheme(Timeline)
