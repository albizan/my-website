import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import { useThemes } from '../../context/theme/context'
import {
  toggleTextColor,
  toggleBorderColor,
  toggleBackgroundColor,
  toggleHoverTextColor,
  toggleHoverBackgroundColor,
} from '../../themes/toggle'

const ThemeToggle = ({ theme }) => {
  /* Retreive toggle function from context */
  const { toggle } = useThemes()

  const Toggle = styled.button`
    margin: 1.5rem 1.5rem 0 0;
    color: ${toggleTextColor};
    background-color: ${toggleBackgroundColor};
    border-radius: 1rem;
    border: 2px solid ${toggleBorderColor};
    transition: opacity 0.4s;
    opacity: 0.8;
    &:hover {
      opacity: 1;
      color: ${toggleHoverTextColor};
      background-color: ${toggleHoverBackgroundColor};
    }
  `

  return (
    <div className="absolute top-0 right-0 z-10">
      <Toggle
        onClick={toggle}
        className="text-xs text-sm sm:text-base font-bold px-4 py-2"
      >
        {theme.mode === 'light' ? 'Go Dark' : 'Go Light'}
      </Toggle>
    </div>
  )
}

/* withTheme allows to use theme prop in ThemeToggle */
export default withTheme(ThemeToggle)
