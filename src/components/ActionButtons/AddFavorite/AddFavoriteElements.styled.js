import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const AddFavoriteVideoButton = styled.button`
  border-radius: 4px;
  border: none;
  background: #ff5349;
  color: #fff;
  font-size: 0.75rem;
  padding: 0.625rem 1rem;
  cursor: pointer;
  transition: transform 0.3s ease-in;
  &:not(:disabled):hover {
    background-color: #ec0d00;
    transform: scale(1.1);
  }
  &:disabled {
    background-color: #620500;
    color: var(--tertiary-color);
  }
  &:disabled:hover {
    cursor: not-allowed;
  }
`;

export const PlusIcon = styled(FaPlus)`
  color: inherit;
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.625rem;
`;
