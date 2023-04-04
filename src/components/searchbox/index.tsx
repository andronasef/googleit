import { useEffect, useState } from 'react';
import { getSuggetions } from '../../utils/api';
import { getHashQuery } from '../../utils/hash_router_helpers';
import SearchField from './search_field';
import SearchStatus from './status_enum';
import SearchSuggetions from './suggestions';

function SearchBox() {
  const [query, setQuery] = useState(decodeURIComponent(getHashQuery() || ''));
  const [suggestionsResults, setSuggestionsResults] = useState({});
  const [status, setStatus] = useState(SearchStatus.idle); // idle, loading, success, error

  const isQueryValid = query.trimStart().length > 0;

  const isSearchpage = window.location.href.includes('search');

  useEffect(() => {
    if (query == decodeURIComponent(getHashQuery() as string)) return;
    if (isQueryValid) {
      setStatus(SearchStatus.loading);

      const timer = setTimeout(async () => {
        if (isQueryValid) {
          setSuggestionsResults(await getSuggetions(query));
          setStatus(SearchStatus.success);
        }
      }, 100);

      return () => {
        setStatus(SearchStatus.loading);
        clearTimeout(timer);
      };
    } else {
      setStatus(SearchStatus.idle);
    }
  }, [query]);
  return (
    <>
      <div
        className={`${
          isQueryValid ? 'shadow-xl rounded-b-[1.25rem]' : 'rounded-full'
        } ${
          isSearchpage ? 'shadow-lg' : ''
        } relative w-[90%]  md:max-w-lg hover:shadow-lg focus-visible:shadow-lg`}
      >
        <SearchField
          isQueryValid={isQueryValid}
          status={status}
          query={query}
          setQuery={setQuery}
          setStatus={setStatus}
        />
        <SearchSuggetions
          isQueryValid={isQueryValid}
          status={status}
          suggestionsResults={suggestionsResults}
          setStatus={setStatus}
        />
      </div>
    </>
  );
}

export default SearchBox;
