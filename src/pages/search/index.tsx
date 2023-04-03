import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ResultsSearchBox from '../../components/results_searchbox';
import SearchResults from '../../components/searchresults';
import { getSearchResults } from '../../utils/api';

export async function loader({ request }: { request: any }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  if (!q) {
    throw new Error('No search query provided');
  }
  return { q };
}

function Search() {
  const { q } = useLoaderData();
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    (async () => setSearchResults(await getSearchResults(q)))();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-5 md:p-8 md:max-w-xl lg:max-w-2xl">
      <ResultsSearchBox />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default Search;
