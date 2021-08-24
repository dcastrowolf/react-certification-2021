import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';

const mockData = {
  title: 'wizeline bootcamp',
  description: 'react bootcamp 2021',
  imgSrc: 'https//wizeline.cdn.images/wizeline',
  channel: 'wizeline',
  publishedDate: '2021-08-23',
  videoId: 'unique',
};

describe('<Card> component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Card {...mockData} />
        );
      </Router>
    );
  });

  it('contains image with image source', () => {
    const img = screen.getByRole('img');
    expect(img.alt).toBe('wizeline bootcamp | Image Video');
  });

  it('video data is beign displayed on the screen', () => {
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(/#wizeline/i)).toBeInTheDocument();
    expect(screen.getByText(mockData.publishedDate)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
