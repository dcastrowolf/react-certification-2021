import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardList from './CardList.component';

const mockedVideoData = [
  {
    id: 'xyz',
    snippet: {
      publishedAt: '2014-09-27T01:39:18Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Wizeline',
      description:
        "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
      thumbnails: {
        default: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
        },
        medium: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
        },
        high: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
        },
      },
      channelTitle: 'Wizeline',
    },
  },
];

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
