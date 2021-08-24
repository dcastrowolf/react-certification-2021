import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ToggleThemeProvider, { useToggleTheme } from './ToggleTheme.provider';

const TestComponent = () => {
  const { theme, toggleTheme } = useToggleTheme();
  return (
    <>
      <h1>{theme.title}</h1>
      <button onClick={toggleTheme} type="button">
        toggle
      </button>
    </>
  );
};

describe('Test ToggleTheme Context', () => {
  beforeEach(() => {
    render(
      <ToggleThemeProvider>
        <TestComponent />
      </ToggleThemeProvider>
    );
  });

  it('toogle Theme from dark to light', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBeDefined();
    expect(heading.textContent).toBe('dark');
    fireEvent.click(button);
    expect(screen.getByText(/light/i)).toBeInTheDocument();
  });
});
