import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

export function useSearchForm({ initialValue }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const history = useHistory();
  const goToResultPage = () => {
    if (searchTerm) {
      const composedQuery = queryString.stringify({ searchText: searchTerm });
      history.push(`/results?${composedQuery}`);
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    goToResultPage,
  };
}
