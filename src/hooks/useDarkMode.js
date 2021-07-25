import { useState } from 'react';
import { darkTheme, lightTheme, THEMES } from 'themes';

export function useDarkMode() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    if (theme.title === THEMES.DARK) {
      setTheme(lightTheme);
      return;
    }
    setTheme(darkTheme);
  };
  return { theme, toggleTheme };
}
