import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import { useThemes } from '../../context/theme/context'
import { backgroundColorDarker, accentColor1 } from '../../theme'

const ThemeToggle = ({ theme }) => {
  /* Retreive toggle function from context */
  const { toggle } = useThemes()

  const Toggle = styled.button`
    margin: 2rem 2rem 0 0;
    font-weight: bold;
    color: ${accentColor1};
    border-radius: 1.2rem;
    border: 2px solid ${accentColor1};
    padding: 0.5rem 1rem;
    &:hover {
      color: ${backgroundColorDarker};
      background-color: ${accentColor1};
    }
  `

  return (
    <div className="absolute top-0 right-0">
      <Toggle onClick={toggle}>
        {theme.mode === 'light' ? 'Go Black' : 'Go White'}
      </Toggle>
    </div>
  )
}

/* withTheme allows to use theme prop in ThemeToggle */
export default withTheme(ThemeToggle)
