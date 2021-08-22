import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SwitchTheme from './SwitchTheme.component';

describe('<SwitchTheme> component', () => {
  test('should contains text with Dark Mode', () => {
    const component = render(<SwitchTheme theme="dark" />);
    component.getByText(/dark mode/i);
  });

  test('clicking the <SwitchTheme> calls event handler once', () => {
    const mockToggleTheme = jest.fn();
    const component = render(<SwitchTheme theme="dark" toggleTheme={mockToggleTheme} />);
    const clickable = component.getByText('Dark Mode');
    fireEvent.click(clickable);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  test('renders Moon when theme is dark', () => {
    const component = render(<SwitchTheme theme="dark" />);
    component.getByLabelText('moon-icon');
  });

  test('renders Sun when theme is light', () => {
    const component = render(<SwitchTheme theme="light" />);
    component.getByLabelText('sun-icon');
  });
});
