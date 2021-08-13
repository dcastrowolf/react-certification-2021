import { THEMES } from 'themes';
import React from 'react';
import { useToggleTheme } from 'providers/ToggleTheme';
import { Moon, Sun, SwicthContainer } from './SwitchThemeElements.styled';

function SwtchTheme() {
  const { theme, toggleTheme } = useToggleTheme();
  return (
    <SwicthContainer onClick={toggleTheme}>
      {theme.title === THEMES.DARK ? (
        <Moon aria-label="moon-icon" />
      ) : (
        <Sun aria-label="sun-icon" />
      )}
      <p>Dark Mode</p>
    </SwicthContainer>
  );
}

export default SwtchTheme;
