import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

import { useAuth } from 'providers/Auth';

function Private({ children, ...rest }) {
  const {
    auth: { authenticated },
  } = useAuth();

  console.log('%cPrivate route', 'color: lightblue; font-size:14px; font-weight: bold');
  console.log(authenticated);
  const history = useHistory();
  console.log(history);

  return (
    <Route
      {...rest}
      render={() => (authenticated ? children : <Redirect to="/login" />)}
    />
  );
}

export default Private;
