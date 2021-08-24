import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ToggleThemeProvider from 'providers/ToggleTheme/ToggleTheme.provider';
import NavBar from './NavBar.component';

describe('<NavBar /> component', () => {
  beforeEach(() => {
    render(
      <ToggleThemeProvider>
        <Router>
          <NavBar />
        </Router>
      </ToggleThemeProvider>
    );
  });

  test('should contains wizeline title', () => {
    const title = screen.queryByText(/Wizelinetube/i);
    expect(title).toBeInTheDocument();
  });

  test('should contains search input', () => {
    screen.getByPlaceholderText(/search/i);
    screen.getByRole('textbox');
  });

  test('should contains dark mode text', () => {
    const darkMode = screen.queryByText(/Dark Mode/i);
    expect(darkMode).toBeInTheDocument();
  });
});
