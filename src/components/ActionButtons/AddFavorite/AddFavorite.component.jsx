import { useAuth } from 'providers/Auth';
import React, { useCallback, useEffect, useState } from 'react';
import { AddFavoriteVideoButton, PlusIcon } from './AddFavoriteElements.styled';

export function AddFavorite({ videoId }) {
  const [disableButton, setDisableButton] = useState(false);
  const {
    auth: {
      userData: { favoriteVideos },
    },
    addFavoriteVideo,
  } = useAuth();

  const changeButtonStatus = useCallback(() => {
    const isAlreadyFavoriteVideo =
      favoriteVideos && favoriteVideos.some((v) => v === videoId);
    setDisableButton(isAlreadyFavoriteVideo);
  }, [favoriteVideos, videoId]);

  useEffect(() => {
    changeButtonStatus();
  }, [changeButtonStatus]);

  const handleClick = () => {
    addFavoriteVideo(videoId);
    setDisableButton(true);
  };

  return (
    <AddFavoriteVideoButton onClick={handleClick} disabled={disableButton}>
      Add Favorite
      <PlusIcon />
    </AddFavoriteVideoButton>
  );
}
