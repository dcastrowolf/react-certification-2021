import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.article`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-background-color);
  padding: 1rem;
`;

export const CardImgWrapper = styled(Link)`
  display: block;
  width: calc(100% + 2rem);
  height: 12rem;
  border-bottom: 3px solid #1c5476;
  margin: -1rem -1rem 0;
  background: var(--color-grey-1);
  cursor: pointer;
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h4`
  margin-bottom: 0%.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.625rem;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: var(--secondary-font-color);
  span {
    display: block;
    margin-top: calc(0.625rem / 2);
    color: inherit;
    font-weight: bold;
  }
`;
