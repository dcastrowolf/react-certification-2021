import Card from 'components/Card/Card.component';
import React from 'react';
import { CardGrid } from './CardListElements.styled';

function CardList({ videos }) {
  return (
    <CardGrid>
      {videos.map((ytVideo) => {
        const { snippet, id } = ytVideo;
        return (
          <Card
            key={id}
            title={snippet.title}
            description={snippet.description}
            imgSrc={snippet.thumbnails.medium.url}
            channel={snippet.channelTitle}
            publishedDate={snippet.publishedAt}
            videoId={id}
          />
        );
      })}
    </CardGrid>
  );
}

export default CardList;
