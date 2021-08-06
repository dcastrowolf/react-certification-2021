import Loader from 'components/Loader';
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
  const { relatedVideos, isLoading, getRelatedVideos } = useSingleYoutubeVideo();

  useEffect(() => {
    if (id) {
      getRelatedVideos({ videoId: id });
    }
  }, [getRelatedVideos, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <VideoContainer>
      <VideoContent>
        <VideoPlayer
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          title="Embedded youtube Video"
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
