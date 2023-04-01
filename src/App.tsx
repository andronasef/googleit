import { useEffect, useState } from 'react';
import IcRoundClose from '~icons/ic/round-close';
import MaterialSymbolsSearchRounded from '~icons/material-symbols/search-rounded';
import { getSuggetions } from './utils/api';

enum Status {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

function App() {
  const [query, setQuery] = useState('');
  const [suggestionsResults, setSuggestionsResults] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const isQueryValid = query.trimStart().length > 0;

  useEffect(() => {
    if (isQueryValid) {
      setStatus(Status.loading);

      const timer = setTimeout(async () => {
        if (isQueryValid) {
          setSuggestionsResults(await getSuggetions(query));
          setStatus(Status.success);
        }
      }, 100);

      return () => {
        setStatus(Status.loading);
        clearTimeout(timer);
      };
    } else {
      setStatus(Status.idle);
    }
  }, [query]);

  const handleQueryChange = async (e: any) => {
    setQuery(e.target.value);
  };
  const clearQuery = () => {
    setQuery('');
    setStatus(Status.idle);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center pb-10 gap-5 w-full mt-16">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
          width="200"
        />
        <div
          className={`${
            isQueryValid ? 'shadow-xl rounded-b-[1.25rem]' : 'rounded-full'
          } relative w-[90%] md:max-w-[450px] hover:shadow-xl focus-visible:shadow-xl `}
        >
          <div className="relative">
            <MaterialSymbolsSearchRounded className="absolute top-0 bottom-0 m-auto left-4 text-[#9AA0A6]" />
            <input
              type="text"
              className={`flex-grow w-full border-[#000*90] border-2 border-solid rounded-full px-10 py-[.45rem] focus-visible:outline-0 overflow-hidden 
              ${isQueryValid ? 'rounded-b-none rounded-t-[1.25rem]' : ''}`}
              autoComplete="off"
              value={query}
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
          {(status == Status.loading || status == Status.success) &&
            isQueryValid && (
              <div className="pb-2 w-full">
                {Object.entries(suggestionsResults).map((suggestion) => (
                  <div
                    className="flex items-center px-3 py-1 font-semibold hover:bg-[#F8F9FA]"
                    key={suggestion[0]}
                  >
                    <MaterialSymbolsSearchRounded className="ml-1 mr-3 text-[#9AA0A6]" />
                    <span> {suggestion[1] as string}</span>
                  </div>
                ))}
                {Object.keys(suggestionsResults).length === 0 &&
                  status && ( // No results found
                    <div className="py-3 text-center text-[#9AA0A6]">
                      {status == Status.loading
                        ? 'Loading...'
                        : 'No results found (press enter to search)'}
                    </div>
                  )}
              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default App;
