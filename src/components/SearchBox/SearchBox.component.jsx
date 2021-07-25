import React from 'react';
import { SearchContainer, SearchInput } from './SearchBoxElements.styled';

function SearchBox() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" />
    </SearchContainer>
  );
}

export default SearchBox;
