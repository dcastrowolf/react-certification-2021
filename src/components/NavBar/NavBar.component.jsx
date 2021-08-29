import Avatar from 'components/Avatar';
import SearchBox from 'components/SearchBox';
import SwitchTheme from 'components/SwitchTheme';
import IconsContainer from 'components/UI/IconsContainer';
import React from 'react';
import Logo from 'assets/img/YoutubeIcon.svg';
import { useRouteMatch } from 'react-router';
import { useAuth } from 'providers/Auth';
import { FavoritesLink, Nav, NavLogo } from './NavBarElements.styled';

export default function NavBar() {
  const match = useRouteMatch('/login');
  const {
    auth: { authenticated },
  } = useAuth();

  if (match && match.isExact) {
    return null;
  }
  return (
    <Nav>
      <NavLogo to="/">
        <img width={40} height={30} src={Logo} alt="WizelineTube logo" />
        <p>WizelineTube</p>
      </NavLogo>
      <SearchBox />
      <IconsContainer>
        <SwitchTheme />
        {authenticated && <FavoritesLink to="/favorites">Favorites</FavoritesLink>}
        <Avatar />
      </IconsContainer>
    </Nav>
  );
}
