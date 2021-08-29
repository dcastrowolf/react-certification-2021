import { useAuth } from 'providers/Auth';
import React from 'react';
import { useHistory } from 'react-router';
import {
  AvatarIcon,
  AvatarIconLoggedIn,
  AvatarLoggedInContainer,
} from './AvatarElements.styled';

function Avatar() {
  const {
    auth: {
      userData: { name, avatarUrl },
      authenticated,
    },
    logout,
  } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    history.push({ pathname: '/login' });
  };

  if (authenticated) {
    return (
      <>
        <AvatarLoggedInContainer onClick={logout}>
          <AvatarIconLoggedIn src={avatarUrl} alt={`${name} | profile image`} />
        </AvatarLoggedInContainer>
      </>
    );
  }

  return (
    <>
      <AvatarLoggedInContainer onClick={handleLogin}>
        <AvatarIcon />
      </AvatarLoggedInContainer>
    </>
  );
}

export default Avatar;
