import { useAuth } from 'providers/Auth';
import React from 'react';
import { ActionButtonsContainer } from './ActionButtonsElements.styled';
import { AddFavorite } from './AddFavorite/AddFavorite.component';

function ActionButtons({ videoId, videoTitle }) {
  const {
    auth: { authenticated },
  } = useAuth();
  return (
    <ActionButtonsContainer>
      <h3>{videoTitle}</h3>
      {authenticated && <AddFavorite videoId={videoId} />}
    </ActionButtonsContainer>
  );
}

export default ActionButtons;
