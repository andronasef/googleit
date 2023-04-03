import { useRef } from 'react';
import IcRoundClose from '~icons/ic/round-close';
import MaterialSymbolsSearchRounded from '~icons/material-symbols/search-rounded';
import SearchStatus from './status_enum';
function SearchField({
  query = null,
  setQuery,
  setStatus,
  isQueryValid,
  status,
}: {
  query: any;
  setQuery: (query: string) => void;
  setStatus: (status: SearchStatus) => void;
  isQueryValid: boolean;
  status: SearchStatus;
}) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const queryPram = new URLSearchParams(location.search).get('q') || '';

  const handleQueryChange = async (e: any) => {
    setQuery(e.target.value);
  };
  const clearQuery = () => {
    setQuery('');
    setStatus(SearchStatus.idle);
  };

  function handleSearch(query: string) {
    location.assign(`/search?q=${query}`);
  }

  function handleKeyboardKeys(e: any) {
    if (e.key === 'Enter') {
      handleSearch(query);
    } else if (e.key === 'Escape') {
      setStatus(SearchStatus.idle);
      searchInputRef.current?.blur();
    }
  }

  return (
    <>
      <div className="relative">
        <MaterialSymbolsSearchRounded className="absolute top-0 bottom-0 m-auto left-4 text-[#9AA0A6]" />
        <input
          ref={searchInputRef}
          onKeyDown={handleKeyboardKeys}
          type="text"
          className={`flex-grow w-full border-[#000*90] border-2 border-solid rounded-full px-10 py-[.45rem] focus-visible:outline-0 overflow-hidden 
              ${
                isQueryValid && status != SearchStatus.idle
                  ? 'rounded-b-none rounded-t-[1.25rem]'
                  : ''
              }`}
          autoComplete="off"
          value={query == null ? queryPram : query}
          onChange={handleQueryChange}
        />
        <button
          className={`${
            isQueryValid ? 'visible' : 'opacity-0 invisible'
          } absolute top-0 bottom-0 m-auto right-5 text-[#9AA0A6]`}
          onClick={clearQuery}
        >
          <IcRoundClose />
        </button>
      </div>
    </>
  );
}

export default SearchField;
