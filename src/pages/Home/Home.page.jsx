import CardList from 'components/CardList/CardList.component';
import { useYoutubeVideos } from 'hooks/youtube/videos/useYoutubeVideos';
import React, { useEffect } from 'react';
import { HomeContainer } from './HomeElements.styled';

function HomePage() {
  const { videos, isLoading, fetchHomeVideos } = useYoutubeVideos();
  useEffect(() => {
    fetchHomeVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HomeContainer>
      <h1>Welcome to the Challenge!</h1>
      {isLoading || !videos.length ? <h3>Loading...</h3> : <CardList videos={videos} />}
    </HomeContainer>
  );
}

export default HomePage;
