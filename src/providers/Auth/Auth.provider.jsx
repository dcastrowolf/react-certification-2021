import React, { useEffect, useContext, useCallback, useReducer } from 'react';
import { useHistory } from 'react-router';

import { authenticationService, userStorage } from 'services/authenticationService';
import {
  ADD_FAVORITE_VIDEO,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_FAVORITE_VIDEO,
} from './reducers/actionTypes';
import {
  authenticationReducer,
  authenticationState,
} from './reducers/authenticationReducer';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children, ...rest }) {
  const [auth, dispatch] = useReducer(authenticationReducer, authenticationState);
  const history = useHistory();

  useEffect(() => {
    const isAuthenticated = Boolean(userStorage.token);
    if (isAuthenticated) {
      const loggedUser = JSON.parse(atob(userStorage.token));
      const payload = { userData: loggedUser, token: userStorage.token };
      dispatch({ type: LOGIN_SUCCESS, payload });
    }
  }, []);

  useEffect(() => {
    const { userData } = auth;
    if (userData.id) {
      userStorage.token = userData;
    }
  }, [auth]);

  const login = useCallback(
    ({ username, password }) => {
      dispatch({ type: LOGIN_REQUEST });
      authenticationService
        .login({ username, password })
        .then((response) => {
          const payload = { userData: response, token: userStorage.token };
          dispatch({ type: LOGIN_SUCCESS, payload });
          history.push({
            pathname: '/favorites',
          });
        })
        .catch((error) => {
          dispatch({ type: LOGIN_FAIL, payload: error.message });
        });
    },
    [history]
  );

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    userStorage.token = null;
    history.push({
      pathname: '/',
    });
  }, [history]);

  const addFavoriteVideo = useCallback((videoId) => {
    dispatch({ type: ADD_FAVORITE_VIDEO, payload: { videoId } });
  }, []);

  const removeFavoriteVideo = useCallback((videoId) => {
    dispatch({ type: REMOVE_FAVORITE_VIDEO, payload: { videoId } });
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, addFavoriteVideo, removeFavoriteVideo, auth }}
      {...rest}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
