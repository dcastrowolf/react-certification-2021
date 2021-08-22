import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoCardContainer = styled(Link)`
  display: flex;
  flex: 1;
  padding: 0 0.625rem;
  gap: 0.625rem;
  width: 100%;
  max-height: 200px;
  text-decoration: none;
  border-bottom: 2px solid teal;
  margin-bottom: 0.625rem;
`;

export const VideoCardPicture = styled.img`
  display: block;
  flex-basis: 60%;
  max-width: 60%;
  object-fit: contain;
`;

export const VideoCardText = styled.div`
  max-width: 40%;
  flex-basis: 40%;
  overflow: hidden;
  color: var(--secondary-font-color);
`;
