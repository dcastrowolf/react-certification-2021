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
import { useGapi } from 'hooks/youtube/useGapi';
import VideoDetails from 'pages/VideoDetails';
import Results from 'pages/Results';
import Loader from 'components/Loader';
import { useToggleTheme } from 'providers/ToggleTheme';
import YouTubeProvider from 'providers/YouTube/YouTube.provider';
import Private from 'components/Private/Private.component';
import FavoriteVideos from 'pages/FavoriteVideos';

function App() {
  const { theme } = useToggleTheme();
  const gapi = useGapi();
  if (!gapi) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Loader full />
      </ThemeProvider>
    );
  }
  return (
    <BrowserRouter>
      <AuthProvider>
        <YouTubeProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NavBar />
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
                <Private exact path="/favorites">
                  <FavoriteVideos />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </ThemeProvider>
        </YouTubeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
