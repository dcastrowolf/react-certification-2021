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
import { useGapi } from 'hooks/youtube/useGapi';
import VideoDetails from 'pages/VideoDetails';
import Results from 'pages/Results';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const gapi = useGapi();
  if (!gapi) {
    return <>Loading...</>;
  }
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
            <Route path="/video/:id">
              <VideoDetails />
            </Route>
            <Route exact path="/results">
              <Results />
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
