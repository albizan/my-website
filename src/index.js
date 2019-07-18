import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import ThemeState from "./context/theme/state";

ReactDOM.render(
  <ThemeState>
    <App />
  </ThemeState>
  , document.getElementById('root'));
