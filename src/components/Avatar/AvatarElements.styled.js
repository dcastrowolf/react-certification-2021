import styled from 'styled-components';
import { MdAccountCircle } from 'react-icons/md';

export const AvatarLoggedInContainer = styled.div`
  height: var(--icon-height-sq);
  width: var(--icon-width-sq);
  cursor: pointer;
`;

export const AvatarIcon = styled(MdAccountCircle)`
  color: var(--color-grey-1);
  width: inherit;
  height: inherit;
  cursor: pointer;
`;

export const AvatarIconLoggedIn = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`;
