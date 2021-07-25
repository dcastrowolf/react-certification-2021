import CardList from 'components/CardList/CardList.component';
import React from 'react';
import { HomeContainer } from './HomeElements.styled';

function HomePage() {
  return (
    <HomeContainer>
      <h1>Welcome to the Challenge!</h1>
      <CardList />
    </HomeContainer>
  );
}

export default HomePage;
