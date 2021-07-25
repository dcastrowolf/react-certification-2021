import { THEMES } from 'themes';
import React from 'react';
import { Moon, Sun, SwicthContainer } from './SwitchThemeElements.styled';

function SwtchTheme({ theme, toggleTheme }) {
  return (
    <SwicthContainer onClick={toggleTheme}>
      {theme === THEMES.DARK ? <Moon /> : <Sun />}
      <p>Dark Mode</p>
    </SwicthContainer>
  );
}

export default SwtchTheme;
