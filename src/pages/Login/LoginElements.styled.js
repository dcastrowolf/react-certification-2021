import styled, { keyframes } from 'styled-components';
import { rgba } from 'utils/fns';

const roadInAnimation = keyframes`
  0% { transform:translateX(-1500px) skewX(30deg) scaleX(1.3); }
  70% { transform:translateX(30px) skewX(0deg) scaleX(.9); }
  100% { transform:translateX(0px) skewX(0deg) scaleX(1); }
`;

export const LoginContainer = styled.section`
  align-items: center;
  background: transparent;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Error = styled.div`
  width: 400px;
  max-width: 100%;
  padding: 0.8rem;
  background-color: #ff5349;
  color: white;
  border-radius: 10px;
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
  transform: translateX(-1500px);
  animation: ${roadInAnimation} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

export const LoginForm = styled.form`
  width: 600px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background.secondaryColor};
  color: ${({ theme }) => theme.fonts.primaryColor};
  padding: 2.5rem;
  box-shadow: 0 5px 20px ${({ theme }) => rgba(theme.background.tertiaryColor, 0.2)};
`;

export const FormGroup = styled.div`
  margin-bottom: 0.625rem;
  width: 100%;
  label {
    display: flex;
    flex-direction: column;
    strong {
      text-transform: capitalize;
      margin-bottom: 0.625rem;
      font-size: 1rem;
    }
    input {
      border: 1.2px solid var(--tertiary-color);
      background-color: transparent;
      box-shadow: none;
      font-size: 1rem;
      font-weight: 400;
      line-height: 24px;
      color: var(--searchbox-text-color);
      padding: 0.3rem;
      &:focus {
        outline: none;
      }
    }
  }
`;

export const InlineGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const LoginButton = styled.button`
  min-width: 200px;
  padding: 0.625rem 1.25rem;
  border-radius: 4px;
  border: none;
  background: #ff5349;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2.5rem;
`;

export const CancelButton = styled(LoginButton)`
  background: #0095c1;
`;
