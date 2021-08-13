import { THEME_KEY, useDarkMode } from 'hooks/useDarkMode';
import React, { useContext, useEffect } from 'react';
import { darkTheme, lightTheme, THEMES } from 'themes';
import { storage } from 'utils/storage';

const ToggleThemeContext = React.createContext(null);

function useToggleTheme() {
  const context = useContext(ToggleThemeContext);
  if (!context) {
    throw new Error(`Can't use "useToogleTheme" without ToogleThemeProvider!`);
  }
  return context;
}

function ToggleThemeProvider({ children }) {
  const { theme, toggleTheme, setTheme } = useDarkMode();

  useEffect(() => {
    const userTheme = storage.get(THEME_KEY);
    if (userTheme) {
      switch (userTheme) {
        case THEMES.LIGHT:
          setTheme(lightTheme);
          break;

        case THEMES.DARK:
        default:
          setTheme(darkTheme);
          break;
      }
    }
  }, [setTheme]);

  return (
    <ToggleThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
}

export { useToggleTheme };
export default ToggleThemeProvider;
