import { useState } from 'react';
import { darkTheme, lightTheme, THEMES } from 'themes';
import { storage } from 'utils/storage';

export const THEME_KEY = 'WIZETUBE_USER_THEME';

export function useDarkMode() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    if (theme.title === THEMES.DARK) {
      storage.set(THEME_KEY, THEMES.LIGHT);
      setTheme(lightTheme);
      return;
    }
    storage.set(THEME_KEY, THEMES.DARK);
    setTheme(darkTheme);
  };

  return { theme, toggleTheme, setTheme };
}
