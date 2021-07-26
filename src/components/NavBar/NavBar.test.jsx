import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar.component';

describe('<NavBar /> component', () => {
  let component;
  beforeEach(() => {
    component = render(<NavBar />);
  });

  test('should contains wizeline title', () => {
    const title = component.queryByText(/Wizeline YouTube \| Clone/i);
    expect(title).toBeInTheDocument();
  });

  test('should contains search input', () => {
    component.getByPlaceholderText(/search/i);
    component.getByRole('textbox');
  });

  test('should contains dark mode text', () => {
    const darkMode = component.queryByText(/Dark Mode/i);
    expect(darkMode).toBeInTheDocument();
  });
});
