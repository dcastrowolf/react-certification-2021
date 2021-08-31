import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { youtubeMockData } from 'mocks/youtube-videos-mock';
import CardList from './CardList.component';

const mockedVideoData = youtubeMockData.items.filter((v) => !!v.id.videoId);

describe('<CardList> component', () => {
  it('do not display any card when there is not any video', () => {
    render(
      <Router>
        <CardList />
      </Router>
    );
    expect(screen.getByText(/no videos/i)).toBeInTheDocument();
  });

  it('display a serie of cards when there are any video in the videos prop', () => {
    render(
      <Router>
        <CardList videos={mockedVideoData} />
      </Router>
    );
    const cards = screen.getAllByAltText(/Image Video/i);
    expect(cards.length).toEqual(mockedVideoData.length);
  });
});
