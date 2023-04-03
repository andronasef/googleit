import { useEffect, useState } from 'react';
import ResultsSearchBox from '../../components/results_searchbox';
import SearchResults from '../../components/searchresults';
import { getSearchResults } from '../../utils/api';

function Search() {
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (!query) return;
    document.title = `Search results for "${query}"`;
    (async () => setSearchResults(await getSearchResults(query)))();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-5 md:p-8 md:max-w-xl lg:max-w-2xl">
      <ResultsSearchBox />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default Search;
