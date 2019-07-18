import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';

/* Custom */
import { Provider } from './context'

/* Define ThemeState */
const ThemeState = ({ children }) => {

  /* Define theme mode, light or dark */
  const [themeState, setThemeState] = useState({
    mode: 'light'
  });

  /* Define a function use to toggle between the two theme modes */
  const toggle = () => {
    console.log('current mode', themeState.mode)
    const mode = (themeState.mode === 'light' ? `dark` : `light`);
    setThemeState({ mode: mode });
  };

  return (
    <Provider value={{ toggle }}>
      <ThemeProvider
        theme={{ mode: themeState.mode }}
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default ThemeState