import Card from 'components/Card/Card.component';
import React from 'react';
import { youtubeMockData } from 'mocks/youtube-videos-mock';
import { CardGrid } from './CardListElements.styled';

const videos = youtubeMockData.items.filter((v) => !!v.id.videoId);

function CardList() {
  return (
    <CardGrid>
      {videos.map((ytVideo) => {
        const { snippet, id } = ytVideo;
        return (
          <Card
            key={id.videoId}
            title={snippet.title}
            description={snippet.description}
            imgSrc={snippet.thumbnails.medium.url}
            channel={snippet.channelTitle}
            publishedDate={snippet.publishedAt}
            videoId={id.videoId}
          />
        );
      })}
    </CardGrid>
  );
}

export default CardList;
