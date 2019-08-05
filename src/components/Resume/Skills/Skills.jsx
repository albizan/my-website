import React from 'react'
import styled, { withTheme } from 'styled-components'

const SkillBarWrapper = styled.div``
const SkillBar = styled.div`
  width: ${props => props.width || '50%'};
`

const Skills = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <h5>HTML</h5>
        </div>
        <div className="w-1/2 text-right text-xs">
          <p>70%</p>
        </div>
      </div>
      <div className="w-full p-1 bg-transparent border-2 rounded border-indigo-600">
        <SkillBar
          width="70%"
          className="rounded h-1 bg-indigo-600 text-right px-2 py-1"
        />
      </div>
    </div>
  )
}

export default Skills
