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
    border-radius: 1.2rem;
    border: 2px solid ${toggleBorderColor};
    transition: background 0.5s;
    &:hover {
      color: ${toggleHoverTextColor};
      background-color: ${toggleHoverBackgroundColor};
    }
  `

  return (
    <div className="absolute top-0 right-0">
      <Toggle
        onClick={toggle}
        className="text-xs sm:text-sm font-bold px-3 py-2"
      >
        {theme.mode === 'light' ? 'Go Dark' : 'Go Light'}
      </Toggle>
    </div>
  )
}

/* withTheme allows to use theme prop in ThemeToggle */
export default withTheme(ThemeToggle)
