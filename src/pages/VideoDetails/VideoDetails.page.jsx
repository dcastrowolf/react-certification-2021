import VideoCard from 'components/VideoCard';
import { useSingleYoutubeVideo } from 'hooks/youtube/video/useSingleYoutubeVideo';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  RelatedVideos,
  VideoContainer,
  VideoContent,
  VideoPlayer,
} from './VideoDetailsElements.styled';

function VideoDetails() {
  const { id } = useParams();
  const { relatedVideos, isLoading, getRelatedVideos } = useSingleYoutubeVideo(id);

  useEffect(() => {
    getRelatedVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <VideoContainer>
      <VideoContent>
        <VideoPlayer
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          title="Enbed youtube Video"
        />
      </VideoContent>
      <RelatedVideos>
        {relatedVideos.map((ytVideo) => {
          return <VideoCard key={ytVideo.id.videoId} video={ytVideo} />;
        })}
      </RelatedVideos>
    </VideoContainer>
  );
}

export default VideoDetails;
