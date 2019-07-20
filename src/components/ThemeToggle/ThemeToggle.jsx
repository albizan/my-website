import React from 'react'
import styled, { withTheme } from 'styled-components'

/* Custom */
import { useThemes } from '../../context/theme/context'
import { toggleBackgroundColor, toggleTextColor } from '../../theme'

const ThemeToggle = ({ theme }) => {
  /* Retreive toggle function from context */
  const { toggle } = useThemes()
  /* Define styled wrapper for togglea */
  const ThemedToggle = styled.div`
    background-color: ${toggleBackgroundColor};
    color: ${toggleTextColor};
    position: absolute;
    top: 2rem;
    right: 2rem;
    padding: 1rem;
    border-radius: 3rem;
    cursor: pointer;
  `
  return (
    <ThemedToggle theme={theme} onClick={toggle}>
      <p className="text-xs">
        {theme.mode === 'light' ? 'Go Black' : 'Go White'}
      </p>
    </ThemedToggle>
  )
}

/* withTheme allows to use theme prop */
export default withTheme(ThemeToggle)
