import styled from 'styled-components';

export const VideoContainer = styled.section`
  display: flex;
  min-height: calc(100vh - var(--navbar-height) - (2 * 1.25rem));
  flex-basis: 100%;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const VideoContent = styled.div`
  flex-basis: 70%;
  max-width: 70%;
  flex-grow: 1;
  flex-shrink: 0.6;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex: 1;
    width: 100%;
    max-width: 100%;
  }
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 500px;
  @media screen and (max-width: 600px) {
    height: 300px;
  }
`;

export const RelatedVideos = styled.div`
  flex-basis: 30%;
  max-width: 30%;
  flex-grow: 1;
  flex-shrink: 0.4;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--navbar-height) - (2 * 1.25rem));
  overflow-y: scroll;
  @media screen and (max-width: 600px) {
    flex: 1;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    height: 100%auto;
  }
`;
