import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from 'providers/Auth';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import NotFound from 'pages/NotFound';
import Layout from 'components/Layout';
import NavBar from 'components/NavBar';
import { GlobalStyle } from 'global.styled';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
