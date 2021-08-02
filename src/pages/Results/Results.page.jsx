import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useYoutubeVideosByKeyword } from 'hooks/youtube/videos/useYoutubeVideosByKeyword';
import VideoCard from 'components/VideoCard';
import { ResultsWrapper } from './ResultsElements.styled';

function Results() {
  const location = useLocation();
  const history = useHistory();
  const { videos, isLoading, fetchVideosByKeyword } = useYoutubeVideosByKeyword();

  useEffect(() => {
    const { searchText } = queryString.parse(location.search);
    if (!searchText) {
      history.push('/404');
    }
    fetchVideosByKeyword({ keyword: searchText });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <ResultsWrapper>
        <h1>Loading...</h1>
      </ResultsWrapper>
    );
  }
  return (
    <ResultsWrapper>
      <h2>Results Page</h2>
      {videos.map((ytVideo) => {
        return <VideoCard key={ytVideo.id.videoId} video={ytVideo} />;
      })}
    </ResultsWrapper>
  );
}

export default Results;
