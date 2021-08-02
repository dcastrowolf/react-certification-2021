import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 0 1 728px;
`;

export const SearchForm = styled.form`
  background-color: var(--searchbox-background-color);
  border: 1.2px solid var(--tertiary-color);
  display: flex;
  flex-basis: 0.000000001px;
  flex-direction: row;
  flex: 1;
  padding: 0.1rem;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  color: var(--searchbox-text-color);
  border: none;
  box-shadow: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  max-width: 100%;
  padding: 0.3rem;
  flex: 1;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  color: var(--searchbox-text-color);
  border: none;
  cursor: pointer;
  flex: 0.1;
  &:focus {
    border: none;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 22px;
  height: 22px;
`;
