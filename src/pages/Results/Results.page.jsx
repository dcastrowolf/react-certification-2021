import React, { useEffect } from 'react';
import VideoCard from 'components/VideoCard';
import Loader from 'components/Loader';
import { useYouTube } from 'providers/YouTube';
import { ResultsWrapper } from './ResultsElements.styled';

function Results() {
  const {
    youtubeState: { videosFromSearchTerm, isLoading },
    setYouTubeSearchTerm,
  } = useYouTube();

  useEffect(() => {
    setYouTubeSearchTerm();
  }, [setYouTubeSearchTerm]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <ResultsWrapper>
      <h2>Results Page</h2>
      {videosFromSearchTerm.map((ytVideo) => {
        return <VideoCard key={`${JSON.stringify(ytVideo.id)}`} video={ytVideo} />;
      })}
    </ResultsWrapper>
  );
}

export default Results;
