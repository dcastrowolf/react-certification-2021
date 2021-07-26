import React from 'react';
import { SearchContainer, SearchInput } from './SearchBoxElements.styled';

function SearchBox() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" id="SearchBox" type="text" name="SearchBox" />
    </SearchContainer>
  );
}

export default SearchBox;
