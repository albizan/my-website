import React from 'react'
import ReactDOM from 'react-dom'

/* Custom imports */
import App from './App.jsx'

/* Import ThemeState component from my contexts */
import ThemeState from './context/theme/state'

/* Import css styles, generated with postcss and tailwind */
import './assets/css/index.css'

/*
  ThemeState wraps App so that App sub-components can get theme mode
  and toggle function to change theme mode
 */
ReactDOM.render(
  <ThemeState>
    <App />
  </ThemeState>,
  document.getElementById('root')
)
