import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ToggleThemeProvider from 'providers/ToggleTheme/ToggleTheme.provider';
import SwitchTheme from './SwitchTheme.component';

describe('<SwitchTheme> component', () => {
  beforeEach(() => {
    render(
      <ToggleThemeProvider>
        <SwitchTheme />
      </ToggleThemeProvider>
    );
  });
  test('should contains text with Dark Mode', () => {
    screen.getByText(/dark mode/i);
  });

  test('clicking the <SwitchTheme> calls event handler once', () => {
    const clickable = screen.getByText('Dark Mode');
    screen.getByLabelText(/moon-icon/i);
    fireEvent.click(clickable);
    expect(screen.getByLabelText(/sun-icon/i)).toBeInTheDocument();
  });
});
