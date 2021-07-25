import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-auto-rows: 25rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
`;
