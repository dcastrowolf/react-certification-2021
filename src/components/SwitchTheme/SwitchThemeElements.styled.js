import styled from 'styled-components';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

export const SwicthContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;
  p {
    margin-left: 5px;
  }
`;

export const Sun = styled(HiOutlineSun)`
  color: var(--main-font-color);
  width: var(--icon-width-sq);
  height: var(--icon-height-sq);
`;

export const Moon = styled(HiOutlineMoon)`
  color: var(--main-font-color);
  width: var(--icon-width-sq);
  height: var(--icon-height-sq);
`;
