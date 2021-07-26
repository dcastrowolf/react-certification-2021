import React from 'react';
import { render } from '@testing-library/react';
import IconsContainer from './IconsContainer.component';

describe('<IconsContainer> component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <IconsContainer>
        <div>Any Icon</div>
      </IconsContainer>
    );
  });

  test('should render its children', () => {
    component.getByText('Any Icon');
  });
});
