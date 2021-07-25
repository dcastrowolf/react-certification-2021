import styled from 'styled-components';

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 0 1 728px;
`;

export const SearchForm = styled.form`
  flex: 1;
  flex-basis: 0.000000001px;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  background-color: var(--searchbox-background-color);
  color: var(--searchbox-text-color);
  border: none;
  box-shadow: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  max-width: 100%;
  flex: 1;
  width: 100%;
`;
