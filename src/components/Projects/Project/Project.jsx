import React from 'react'
import styled, { withTheme } from 'styled-components'

import {
  textColorDarker,
  textColorLighter,
  accentColor,
} from '../../../themes/base'
import { cardBackground, pillTextColor } from '../../../themes/projects'

const Project = ({ img, title, description, categories, technologies }) => {
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
    color: ${pillTextColor};
    background-color: ${accentColor};
  `
  const Tech = styled.span`
    color: ${accentColor};
  `

  return (
    <div
      id="project-wrapper"
      className="w-full md:w-1/2 lg:w-1/3 px-2 md:px-3 lg:px-4 mb-4"
    >
      <CardProject className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={img}
          loading="lazy"
          alt="test"
          className="mx-auto w-full object-cover"
        />
        <div className="p-6">
          <div id="categories">
            {categories.map((category, i) => (
              <CardPill
                key={i}
                className="rounded-full px-2 py-1 text-2xs tracking-wide font-semibold uppercase mr-2"
              >
                {category}
              </CardPill>
            ))}
          </div>
          <CardTitle className="font-semibold tracking-wide truncate mt-3">
            {title}
          </CardTitle>
          <CardDescription className="text-xs md:text-sm leading-snug">
            {description}
          </CardDescription>
          <div id="technologies" className="mt-8">
            <p className="font-semibold">Tech used:</p>
            {technologies.map((tech, i) => (
              <Tech
                key={i}
                className="px-1 text-base"
              >
                {tech}
              </Tech>
            ))}
          </div>
        </div>
      </CardProject>
    </div>
  )
}

export default withTheme(Project)
