export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const lightTheme = {
  title: THEMES.LIGHT,
  background: {
    primaryColor: '#E9E9E9',
    secondaryColor: '#F1F1F1',
  },
  fonts: {
    primaryColor: '#030303',
    secondaryColor: '#606060',
  },
  searchBox: {
    backgroundColor: 'hsl(0, 0%, 100%)',
    textColor: 'hsl(0, 0%, 6.7%)',
  },
  colors: {
    grey: '#AAA',
  },
};

export const darkTheme = {
  title: THEMES.DARK,
  background: {
    primaryColor: '#181818',
    secondaryColor: '#212121',
  },
  fonts: {
    primaryColor: '#FFF',
    secondaryColor: '#AAA',
  },
  searchBox: {
    backgroundColor: 'hsl(0, 0%, 7%)',
    textColor: 'hsla(0, 100%, 100%, 0.88)',
  },
  colors: {
    grey: '#CCC',
  },
};
