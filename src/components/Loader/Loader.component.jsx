import React from 'react';
import {
  Body,
  Eye,
  Jelly,
  LoaderContainer,
  LoaderWrapper,
  Mouth,
  Shadow,
} from './LoaderElements.styled';

function Loader({ full = false }) {
  return (
    <LoaderContainer full={full}>
      <LoaderWrapper>
        <Jelly>
          <Body />
          <Eye position="left" />
          <Eye position="right" />
          <Mouth />
        </Jelly>
        <Shadow />
      </LoaderWrapper>
    </LoaderContainer>
  );
}

export default Loader;
