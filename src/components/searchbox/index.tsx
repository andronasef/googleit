import { useEffect, useState } from 'react';
import { getSuggetions } from '../../utils/api';
import SearchField from './search_field';
import SearchStatus from './status_enum';
import SearchSuggetions from './suggestions';

function SeachBox() {
  const [query, setQuery] = useState('');
  const [suggestionsResults, setSuggestionsResults] = useState({});
  const [status, setStatus] = useState(SearchStatus.idle); // idle, loading, success, error

  const isQueryValid = query.trimStart().length > 0;

  useEffect(() => {
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
        } relative w-[90%] md:max-w-[450px] hover:shadow-xl focus-visible:shadow-xl `}
      >
        <SearchField
          isQueryValid={isQueryValid}
          query={query}
          setQuery={setQuery}
          setStatus={setStatus}
        />
        <SearchSuggetions
          isQueryValid={isQueryValid}
          status={status}
          suggestionsResults={suggestionsResults}
        />
      </div>
    </>
  );
}

export default SeachBox;
