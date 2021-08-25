import VideoCard from 'components/VideoCard';
import { useYouTube } from 'providers/YouTube';
import React, { useEffect, useState } from 'react';
import { FavoritesWrapper } from './FavoriteVideosElements.styled';

function FavoriteVideos() {
  const [favorites, setFavorites] = useState([]);

  const { getFavoriteVideos } = useYouTube();

  useEffect(() => {
    getFavoriteVideos().then((videos) => {
      console.log('my videos', videos);
      setFavorites(videos);
    });
  }, [getFavoriteVideos]);

  return (
    <>
      <FavoritesWrapper>
        <h2>Favorite Videos</h2>
        {favorites.map((ytVideo) => {
          return <VideoCard key={`${JSON.stringify(ytVideo.id)}`} video={ytVideo} />;
        })}
      </FavoritesWrapper>
    </>
  );
}

export default FavoriteVideos;
