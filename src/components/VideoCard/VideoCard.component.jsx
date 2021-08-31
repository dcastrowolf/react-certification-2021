import React from 'react';
import {
  VideoCardContainer,
  VideoCardPicture,
  VideoCardText,
} from './VideoCardElements.styled';

function VideoCard({ video }) {
  const { snippet: videoData } = video;
  const id = typeof video.id === 'object' ? video.id.videoId : video.id;
  return (
    <VideoCardContainer to={`/video/${id}`}>
      <VideoCardPicture src={videoData.thumbnails.medium.url} atl={videoData.title} />
      <VideoCardText>
        <strong>{videoData.title}</strong>
        {videoData.description.slice(0, 100)}...
      </VideoCardText>
    </VideoCardContainer>
  );
}

export default VideoCard;
