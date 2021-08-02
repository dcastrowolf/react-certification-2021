import React from 'react';
import {
  VideoCardContainer,
  VideoCardPicture,
  VideoCardText,
} from './VideoCardElements.styled';

function VideoCard({ video }) {
  const { snippet: videoData } = video;
  return (
    <VideoCardContainer to={`/video/${video.id.videoId}`}>
      <VideoCardPicture src={videoData.thumbnails.medium.url} atl={videoData.title} />
      <VideoCardText>{videoData.description}</VideoCardText>
    </VideoCardContainer>
  );
}

export default VideoCard;
