import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'providers/Auth';

function Private({ children, ...rest }) {
  const {
    auth: { authenticated },
  } = useAuth();

  return (
    <Route
      {...rest}
      render={() => (authenticated ? children : <Redirect to="/login" />)}
    />
  );
}

export default Private;
