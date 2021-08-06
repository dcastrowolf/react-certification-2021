import Avatar from 'components/Avatar';
import SearchBox from 'components/SearchBox';
import SwitchTheme from 'components/SwitchTheme';
import IconsContainer from 'components/UI/IconsContainer';
import React from 'react';
import Logo from 'assets/img/YoutubeIcon.svg';
import { Nav, NavLogo } from './NavBarElements.styled';

export default function NavBar({ theme, toggleTheme }) {
  return (
    <Nav>
      <NavLogo to="/">
        <img width={40} height={30} src={Logo} alt="WizelineTube logo" />
        <p>WizelineTube</p>
      </NavLogo>
      <SearchBox />
      <IconsContainer>
        <SwitchTheme theme={theme} toggleTheme={toggleTheme} />
        <Avatar />
      </IconsContainer>
    </Nav>
  );
}
