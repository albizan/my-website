import React from 'react'
import styled, { withTheme } from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'

/* Custom */
import { useThemes } from '../../context/theme/context'
import { textColor, backgroundColor } from '../../themes/themeToggle'

const ThemeToggle = ({ theme }) => {
  /* Retreive toggle function from context */
  const { toggle } = useThemes()

  const toggleLightTheme = () => {
    if (theme.mode === 'dark') {
      toggle()
    }
  }
  const toggleDarkTheme = () => {
    if (theme.mode === 'light') {
      toggle()
    }
  }

  const Toggle = styled.div`
    margin: 1.5rem 1.5rem 0 0;
    color: ${backgroundColor};
    width: 6.5rem;
    height: 2.5rem;
    border: 2px solid ${backgroundColor};
  `
  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    width: 50%;
    height: 100%;
    background: ${props => (props.active ? backgroundColor : 'transparent')};
    color: ${props => (props.active ? textColor : '333')};
  `

  return (
    <div id="toggle-wrapper" className="absolute lg:fixed top-0 right-0 z-10">
      <Toggle className="flex justify-center items-center rounded">
        <Button onClick={toggleLightTheme} active={theme.mode === 'light'}>
          <p className="text-center">
            <FiSun />
          </p>
        </Button>
        <Button onClick={toggleDarkTheme} active={theme.mode === 'dark'}>
          <p className="text-center">
            <FiMoon />
          </p>
        </Button>
      </Toggle>
    </div>
  )
}

/* withTheme allows to use theme prop in ThemeToggle */
export default withTheme(ThemeToggle)
