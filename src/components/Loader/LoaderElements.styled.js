import styled, { keyframes, css } from 'styled-components';
import { THEMES } from 'themes';
import { rgba } from 'utils/fns';

// Animations
const jumping = keyframes`
  0% { transform: translateY(-40px); }
  70% { transform: scale(1.02, 0.9) translateY(-10px); }
  100% { transform: translateY(-40px); }
`;

const bodyShape = keyframes`
  0% { border-radius: 50px; }
  70% { border-radius: 50px 50px 40px 40px; }
  100% { border-radius: 50px; }
`;

const eye = keyframes`
  0%{ transform: scale(1)}
  2%{ transform: scale(2, 0.2)}
  4%{ transform: scale(1)}
  6%{ transform: scale(2, 0.2)}
  8%{ transform: scale(1)}
`;

const shadow = keyframes`
  0% { transform: scaleX(0.9); }
  70% { transform: scaleX(1) }
  100% { transform: scaleX(0.9); }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: ${({ full }) => (full ? '100vh' : 'calc(100vh - var(--navbar-height))')};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderWrapper = styled.div`
  width: 100px;
  position: relative;
  margin: 50px;
`;

export const Jelly = styled.div`
  animation: ${jumping} 1s infinite;
`;

export const Body = styled.div`
  width: 100px;
  height: 200px;
  border-radius: 50px;
  background-color: var(--loader-body);
  animation: ${bodyShape} 1s infinite;
`;

export const Mouth = styled.div`
  position: absolute;
  top: 85px;
  left: 27px;
  width: 40px;
  height: 20px;
  background-color: var(--loader-dark);
  border-radius: 0 0 40px 40px;
  border-color: var(--loader-dark);
  overflow: hidden;
  z-index: 1;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
    width: 40px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--loader-tongue);
  }
`;

export const Eye = styled.div`
  position: absolute;
  top: 45px;
  width: 10px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--loader-dark);
  animation: ${eye} 6s infinite;
  ${({ position }) =>
    position === 'left'
      ? css`
          left: 30px;
        `
      : css`
          right: 30px;
        `}
`;

export const Shadow = styled.div`
  position: absolute;
  bottom: -10px;
  z-index: -1;
  width: 100px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.title === THEMES.LIGHT
      ? rgba(theme.colors.loaderDark, 0.4)
      : rgba(theme.colors.loaderWhite, 0.4)};
  animation: ${shadow} 1s infinite;
`;
