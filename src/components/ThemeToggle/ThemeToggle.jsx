import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import { useThemes } from '../../context/theme/context'
import { textColor, backgroundColor } from '../../themes/themeToggle'

const ThemeToggle = ({ theme }) => {
  /* Retreive toggle function from context */
  const { toggle } = useThemes()

  const Toggle = styled.button`
    margin: 1.5rem 1.5rem 0 0;
    color: ${textColor};
    background-color: ${backgroundColor};
    transition: opacity 0.4s;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  `

  return (
    <div className="absolute top-0 right-0 z-10">
      <Toggle
        onClick={toggle}
        className="text-sm sm:text-base font-semibold rounded-lg px-3 py-2"
      >
        {theme.mode === 'light' ? 'Go Dark' : 'Go Light'}
      </Toggle>
    </div>
  )
}

/* withTheme allows to use theme prop in ThemeToggle */
export default withTheme(ThemeToggle)
