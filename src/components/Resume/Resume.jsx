import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom imports */
import {
  textColor,
  backgroundLighter,
  backgroundDarker,
} from '../../themes/education'

const EducationStyleWrapper = styled.section`
  color: ${textColor};
  background-color: ${backgroundDarker};
  background-image: linear-gradient(
    45deg,
    ${backgroundLighter} 0%,
    ${backgroundDarker} 85%
  );
`

const Education = () => {
  return (
    <EducationStyleWrapper className="py-32">
      <div className="mx-auto px-8 md:w-3/5">
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          Education
        </h3>
        <div className="border-l-4 border-black mt-8">
          <div className="relative pb-10">
            <div className="absolute left-0 top-0 -ml-3 mt-2 w-5 h-5 bg-black rounded-full" />
            <div className="pl-10">
              <h4 className="text-2xl font-bold pb-2">High School Diploma</h4>
              <h6 className="font-thin">
                Scuola Internazionale Europea Statale Altiero Spinelli - 2015
              </h6>
            </div>
          </div>

          <div className="relative pb-1">
            <div className="absolute left-0 top-0 -ml-3 mt-2 w-5 h-5 bg-black rounded-full" />
            <div className="pl-10">
              <h4 className="text-2xl font-bold pb-2">Bachelor Degree</h4>
              <h6 className="font-thin">Politecnico di Torino - 2018</h6>
            </div>
          </div>
        </div>
      </div>
    </EducationStyleWrapper>
  )
}

export default withTheme(Education)
