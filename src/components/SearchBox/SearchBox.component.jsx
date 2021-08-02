import React from 'react';
import {
  SearchButton,
  SearchContainer,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './SearchBoxElements.styled';

function SearchBox() {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput placeholder="Search" id="SearchBox" type="text" name="SearchBox" />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  );
}

export default SearchBox;
