import { useSearchForm } from 'hooks/search/useSearchForm';
import React from 'react';
import {
  SearchButton,
  SearchContainer,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './SearchBoxElements.styled';

function SearchBox() {
  const { setSearchTerm, goToResultPage } = useSearchForm({ initialValue: null });

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    goToResultPage();
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleChange}
          placeholder="Search"
          id="SearchBox"
          type="text"
          name="SearchBox"
        />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  );
}

export default SearchBox;
