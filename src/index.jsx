import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import ToggleThemeProvider from 'providers/ToggleTheme/ToggleTheme.provider';

ReactDOM.render(
  <React.StrictMode>
    <ToggleThemeProvider>
      <App />
    </ToggleThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
