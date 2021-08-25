import styled from 'styled-components';
import { rgba } from 'utils/fns';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${rgba('#ffffff', 0.75)};
`;
