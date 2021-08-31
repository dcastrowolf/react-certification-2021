import { useAuth } from 'providers/Auth';
import React from 'react';
import { ActionButtonsContainer } from './ActionButtonsElements.styled';
import { AddFavorite } from './AddFavorite/AddFavorite.component';

function ActionButtons({ videoId, video }) {
  const {
    auth: { authenticated },
  } = useAuth();
  return (
    <ActionButtonsContainer>
      <h3>{video?.snippet?.title}</h3>
      {authenticated && <AddFavorite videoId={videoId} />}
    </ActionButtonsContainer>
  );
}

export default ActionButtons;
