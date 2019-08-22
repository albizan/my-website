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
    <div id="project-wrapper" className="w-full lg:w-1/2 px-4 mb-4">
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
          <div className="h-auto lg:h-48">
            <CardTitle className="font-semibold tracking-wide truncate mt-3 text-xl md:text-xl">
              {title}
            </CardTitle>
            <CardDescription className="text-sm md:text-base leading-snug">
              {description}
            </CardDescription>
          </div>
          <div id="technologies" className="mt-12">
            <p className="font-semibold">Tech used:</p>
            {technologies.map((tech, i) => (
              <Tech key={i} className="mr-2 text-base">
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
