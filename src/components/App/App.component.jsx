import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from 'providers/Auth';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import NotFound from 'pages/NotFound';
import Layout from 'components/Layout';
import NavBar from 'components/NavBar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'global.styled';
import { useDarkMode } from 'hooks/useDarkMode';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        </ThemeProvider>
        <NavBar theme={theme.title} toggleTheme={toggleTheme} />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
