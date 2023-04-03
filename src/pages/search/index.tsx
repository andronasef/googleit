import { useEffect, useState } from 'react';
import ResultsSearchBox from '../../components/results_searchbox';
import SearchResults from '../../components/searchresults';
import { getSearchResults } from '../../utils/api';
import { getHashQuery } from '../../utils/hash_router_helpers';

function Search() {
  const [searchResults, setSearchResults] = useState({});
  const query = getHashQuery();

  useEffect(() => {
    if (!query) return;
    document.title = `Search results for "${query}"`;
    (async () => setSearchResults(await getSearchResults(query)))();
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-5 md:p-8 md:max-w-xl lg:max-w-2xl">
      <ResultsSearchBox />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default Search;
