import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useThemes } from './context/theme/context';
import styled, { withTheme } from 'styled-components';
import { backgroundColor, textColor, buttonBackgroundColor, buttonTextColor } from './theme';

function App(props) {

  const { toggle } = useThemes();

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  return (
    <Wrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Button onClick={() => toggle()}>
            {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </p>
      </header>
    </Wrapper>
  );
}

/* Export HOC */
export default withTheme(App);
