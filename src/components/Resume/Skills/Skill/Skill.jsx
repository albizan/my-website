import React from 'react'
import styled, { withTheme } from 'styled-components'

import {
  accentColor,
  textColorDarker,
  textColorLighter,
} from '../../../../themes/base'

const SkillBarWrapper = styled.div`
  border-color: ${accentColor};
`
const SkillBar = styled.div`
  width: ${props => props.width || '50%'};
  background-color: ${accentColor};
`
const SkillName = styled.h5`
  color: ${textColorDarker};
`

const SkillValue = styled.p`
  color: ${textColorLighter};
`

const Skill = ({ skill, value }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <SkillName>{skill}</SkillName>
        </div>
        <div className="w-1/2 text-right text-xs">
          <SkillValue>{value}</SkillValue>
        </div>
      </div>
      <SkillBarWrapper className="w-full p-1 bg-transparent border-2 rounded">
        <SkillBar width={value} className="rounded h-1 px-2 py-1" />
      </SkillBarWrapper>
    </div>
  )
}

export default withTheme(Skill)
