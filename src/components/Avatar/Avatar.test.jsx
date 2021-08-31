import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import AuthProvider from 'providers/Auth/Auth.provider';
import { mockUser } from 'mocks/user-mock';
import Avatar from './Avatar.component';

describe('<Avatar /> component', () => {
  afterEach(cleanup);

  it('Renders icon when no logged in', () => {
    render(
      <AuthProvider
        value={{
          auth: { authenticated: false, userData: { avatarUrl: null, name: null } },
        }}
      >
        <Avatar />
      </AuthProvider>
    );
    screen.getByLabelText(/profile icon/i);
  });

  it('Renders avatar image when user is logged in', () => {
    render(
      <AuthProvider
        value={{
          auth: { authenticated: true, userData: { ...mockUser } },
        }}
      >
        <Avatar />
      </AuthProvider>
    );
    const regex = new RegExp(`${mockUser.name} | profile image`);
    screen.getByAltText(regex);
  });
});
