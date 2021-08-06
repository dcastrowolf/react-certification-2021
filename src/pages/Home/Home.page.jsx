import CardList from 'components/CardList/CardList.component';
import Loader from 'components/Loader';
import { useYoutubeVideos } from 'hooks/youtube/videos/useYoutubeVideos';
import React, { useEffect } from 'react';
import { HomeContainer } from './HomeElements.styled';

function HomePage() {
  const { videos, isLoading, fetchHomeVideos } = useYoutubeVideos();
  useEffect(() => {
    fetchHomeVideos();
  }, [fetchHomeVideos]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <HomeContainer>
      <h1>Welcome to the Challenge!</h1>
      <CardList videos={videos} />
    </HomeContainer>
  );
}

export default HomePage;
