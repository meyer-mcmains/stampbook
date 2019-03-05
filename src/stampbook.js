import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <div>
    <GlobalStyle theme={theme} />
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </div>,
  document.getElementById('root')
);
