import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from '.';

describe('<Home /> page', () => {
  it('Displays welcome to the challenge title', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to the Challenge!/i)).toBeInTheDocument();
  });
});
