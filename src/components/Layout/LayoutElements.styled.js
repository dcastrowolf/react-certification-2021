import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - var(--navbar-height));
  max-height: 100%;
  margin: var(--navbar-height) 0 0 0;
  background-color: transparent;
  padding: 1.25rem;
  display: flex;
  flex-direction: row;
`;
