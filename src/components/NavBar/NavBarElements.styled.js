import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: var(--secondary-background-color);
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--navbar-height);
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
`;

export const NavLogo = styled(Link)`
  color: var(--main-font-color);
  display: flex;
  font-size: 1.5rem;
  gap: 0.625rem;
  text-decoration: none;
  text-align: center;
  @media screen and (max-width: 600px) {
    margin-right: 0.625rem;
    p {
      display: none;
    }
  }
`;
