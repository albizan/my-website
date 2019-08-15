import React from 'react'
import styled, { withTheme } from 'styled-components'

import {
  textColorDarker,
  textColorLighter,
  textColorInverted,
  accentColor,
} from '../../../themes/base'
import { cardBackground } from '../../../themes/projects'

const Project = () => {
  const CardProject = styled.div`
    background-color: ${cardBackground};
  `
  const CardTitle = styled.h4`
    color: ${textColorDarker};
  `

  const CardDescription = styled.p`
    color: ${textColorLighter};
  `

  const CardPill = styled.span`
    color: ${textColorInverted};
    background-color: ${accentColor};
  `

  return (
    <div
      id="project-wrapper"
      className="w-full sm:w-1/2 md:w-1/3 lg:1/4 px-2 md:px-3 lg:px-4 mb-4"
    >
      <CardProject className="rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://picsum.photos/500/250"
          alt="test"
          className="mx-auto w-full object-cover"
        />
        <div className="p-6">
          <div id="techs">
            <CardPill className="rounded-full px-2 py-1 text-2xs tracking-wide font-semibold uppercase mr-2">
              front-end
            </CardPill>
          </div>
          <CardTitle className="font-semibold tracking-wide truncate mt-3">
            This very website
          </CardTitle>
          <CardDescription className="text-xs md:text-sm leading-snug">
            This is my personal website, here I tried exploring some exciting
            new libraries.
          </CardDescription>
        </div>
      </CardProject>
    </div>
  )
}

export default withTheme(Project)
