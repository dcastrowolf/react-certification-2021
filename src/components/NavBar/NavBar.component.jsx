import Avatar from 'components/Avatar';
import SearchBox from 'components/SearchBox';
import SwitchTheme from 'components/SwitchTheme';
import IconsContainer from 'components/UI/IconsContainer';
import React from 'react';
import { Nav } from './NavBarElements.styled';

export default function NavBar({ theme, toggleTheme }) {
  return (
    <Nav>
      <div>
        <h1>Wizeline YouTube | Clone</h1>
      </div>
      <SearchBox />
      <IconsContainer>
        <SwitchTheme theme={theme} toggleTheme={toggleTheme} />
        <Avatar />
      </IconsContainer>
    </Nav>
  );
}
