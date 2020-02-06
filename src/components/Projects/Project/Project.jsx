import React from 'react'
import styled, { withTheme } from 'styled-components'
import { FiGithub, FiGlobe } from 'react-icons/fi'

import {
  textColorDarker,
  textColorLighter,
  accentColor,
} from '../../../themes/base'
import { cardBackground, pillTextColor } from '../../../themes/projects'

const Project = ({
  img,
  title,
  description,
  categories,
  technologies,
  link,
  github,
  github2,
}) => {
  const CardProject = styled.div`
    background-color: ${cardBackground};
  `
  const CardImageWrapper = styled.div`
    overflow: hidden;
    user-select: none;
    img {
      transition: transform 2s ease;
      &:hover {
        transform: scale(1.25) rotate(5deg);
      }
    }
  `
  const CardTitle = styled.h4`
    color: ${textColorDarker};
  `

  const CardDescription = styled.p`
    color: ${textColorLighter};
  `

  const CardPill = styled.span`
    user-select: none;
    color: ${pillTextColor};
    background-color: ${accentColor};
  `
  const Tech = styled.span`
    color: ${accentColor};
  `

  const Links = styled.div`
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid ${textColorLighter};
    display: flex;
    justify-content: space-around;
  `
  const Link = styled.a`
    cursor: pointer;
    font-size: 1.6rem;
    border-radius: 50%;
    border: 2px solid ${textColorLighter};
    color: ${textColorLighter};
    padding: 0.6rem;
    &:hover {
      color: ${accentColor};
      border-color: ${accentColor};
    }
  `

  return (
    <div id="project-wrapper" className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-8">
      <CardProject className="rounded-lg overflow-hidden shadow-lg">
        <CardImageWrapper>
          <img
            src={img}
            loading="lazy"
            alt="test"
            className="mx-auto w-full object-cover"
          />
        </CardImageWrapper>

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
          <div className="h-auto lg:h-64">
            <CardTitle className="font-semibold tracking-wide truncate mt-4 text-lg md:text-xl">
              {title}
            </CardTitle>
            <CardDescription className="text-sm md:text-base leading-snug mt-2">
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
          <Links>
            {link && (
              <Link title="Visit website" href={link} target="_blank">
                <FiGlobe />
              </Link>
            )}
            {github && (
              <Link title="Visit Github Page" href={github} target="_blank">
                <FiGithub />
              </Link>
            )}
            {github2 && (
              <Link title="Visit Github Page" href={github2} target="_blank">
                <FiGithub />
              </Link>
            )}
          </Links>
        </div>
      </CardProject>
    </div>
  )
}

export default withTheme(Project)
