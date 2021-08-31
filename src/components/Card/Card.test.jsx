import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { youtubeCardMockData } from 'mocks/youtube-card-mock';
import Card from './Card.component';

describe('<Card> component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Card {...youtubeCardMockData} />
        );
      </Router>
    );
  });

  it('contains image with image source', () => {
    const img = screen.getByRole('img');
    expect(img.alt).toBe('wizeline bootcamp | Image Video');
  });

  it('video data is beign displayed on the screen', () => {
    expect(screen.getByText(youtubeCardMockData.title)).toBeInTheDocument();
    expect(screen.getByText(/#wizeline/i)).toBeInTheDocument();
    expect(screen.getByText(youtubeCardMockData.publishedDate)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
