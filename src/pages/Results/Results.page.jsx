import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useYoutubeVideosByKeyword } from 'hooks/youtube/videos/useYoutubeVideosByKeyword';
import VideoCard from 'components/VideoCard';
import Loader from 'components/Loader';
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
  }, [fetchVideosByKeyword, history, location.search]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <ResultsWrapper>
      <h2>Results Page</h2>
      {videos.map((ytVideo) => {
        console.log(ytVideo.id);
        return <VideoCard key={`${JSON.stringify(ytVideo.id)}`} video={ytVideo} />;
      })}
    </ResultsWrapper>
  );
}

export default Results;
