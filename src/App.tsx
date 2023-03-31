import { useState } from 'react';
import IcRoundClose from '~icons/ic/round-close';
import MaterialSymbolsSearchRounded from '~icons/material-symbols/search-rounded';

function App() {
  const [query, setQuery] = useState('');

  const clearQuery = () => setQuery('');

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-5 w-full">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
          width="200"
        />
        <div className="relative w-[90%] md:max-w-[450px] hover:shadow-xl focus-visible:shadow-xl">
          <MaterialSymbolsSearchRounded className="absolute top-0 bottom-0 m-auto left-4 text-[#9AA0A6]" />
          <input
            type="text"
            className="flex-grow w-full border-[#000*90] border-2 border-solid rounded-full px-10 py-[.45rem] focus-visible:outline-0 overflow-hidden  "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className={
              (query.length > 0 ? 'visible' : 'opacity-0 invisible') +
              ' ' +
              'absolute top-0 bottom-0 m-auto right-5 text-[#9AA0A6]'
            }
            onClick={clearQuery}
          >
            <IcRoundClose />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
