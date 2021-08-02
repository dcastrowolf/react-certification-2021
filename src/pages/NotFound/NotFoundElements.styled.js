import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GoHomeLink = styled(Link)`
  font-size: 3rem;
  text-decoration: none;
  color: var(--main-font-color);
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--secondary-font-color);
    transform: scale(1);
  }
`;

export const NotFoundImage = styled.figure`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 70%;
  }
  img {
    max-width: 100%;
  }
  figcaption {
    color: var(--secondary-font-color);
    font-size: 0.85rem;
    margin-top: 1.25rem;
    text-align: center;
    &:hover {
      color: var(--main-font-color);
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
