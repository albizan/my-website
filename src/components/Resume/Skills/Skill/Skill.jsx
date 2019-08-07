import React from 'react'
import styled, { withTheme } from 'styled-components'

import {
  accentColor,
  textColorDarker,
  textColorLighter,
} from '../../../../themes/base'

const SkillBarWrapper = styled.div`
  border: 1px solid ${accentColor};
  padding: 2px;
`
const SkillBar = styled.div`
  width: ${props => props.width || '50%'};
  height: 4px;
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
    <div className="mb-4">
      <div className="flex">
        <div className="w-1/2">
          <SkillName>{skill}</SkillName>
        </div>
        <div className="w-1/2 text-right text-xs">
          <SkillValue>{value}</SkillValue>
        </div>
      </div>
      <SkillBarWrapper className="w-full bg-transparent rounded">
        <SkillBar width={value} className="rounded" />
      </SkillBarWrapper>
    </div>
  )
}

export default withTheme(Skill)
