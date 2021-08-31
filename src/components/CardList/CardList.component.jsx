import Card from 'components/Card/Card.component';
import React from 'react';
import { CardGrid } from './CardListElements.styled';

function CardList({ videos = [] }) {
  return (
    <CardGrid>
      {!videos.length ? (
        <div>No videos found</div>
      ) : (
        videos.map((ytVideo) => {
          const { snippet, id } = ytVideo;
          const videoId = typeof id === 'object' ? id.videoId : id;
          return (
            <Card
              key={videoId}
              title={snippet.title}
              description={snippet.description}
              imgSrc={snippet.thumbnails.medium.url}
              channel={snippet.channelTitle}
              publishedDate={snippet.publishedAt}
              videoId={videoId}
            />
          );
        })
      )}
    </CardGrid>
  );
}

export default CardList;
