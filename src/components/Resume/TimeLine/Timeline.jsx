import React from 'react'
import styled, { withTheme } from 'styled-components'

import {
  backgroundColor,
  accentColor,
  dividerColor,
} from '../../../themes/base'

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
  top: 8px;
  left: -6px;
  right: 0;
  width: 14px;
  height: 14px;
  background-color: ${backgroundColor};
  border: 2px solid ${accentColor};
  border-radius: 50%;
`

const Timeline = () => {
  return (
    <div className="flex flex-col">
      <div id="timeline" className="flex">
        <div className="flex-none hidden sm:block">
          <div className="section-text">
            <p className="text-right">2015</p>
          </div>
        </div>
        <Divider className="mx-3">
          <span className="text-transparent">.</span>
          <Point />
        </Divider>
        <div className="flex-grow">
          <div className="section-text">
            <p className="sm:hidden">2015</p>
            <p>High School Diploma</p>
            <p className="text-base text-gray-600 font-base mb-10">
              Scuola Internazionale Europea Statale Altiero Spinelli
            </p>
          </div>
        </div>
      </div>

      {/* Second Itemd */}
      <div id="timeline" className="flex">
        <div className="flex-none hidden sm:block">
          <div className="section-text">
            <p className="text-right">2018</p>
          </div>
        </div>
        <Divider className="mx-3">
          <span className="text-transparent">.</span>
          <Point />
        </Divider>
        <div className="flex-grow">
          <div className="section-text">
            <p className="sm:hidden">2018</p>
            <p>Bachelor Degree</p>
            <p className="text-base text-gray-600 font-base">
              Politecnico di Torino
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTheme(Timeline)
