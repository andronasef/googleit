import MaterialSymbolsSearchRounded from '~icons/material-symbols/search-rounded';
import SearchStatus from './status_enum';

function SearchSuggetions({
  status,
  suggestionsResults,
  isQueryValid,
  setStatus,
}: {
  status: SearchStatus;
  suggestionsResults: Record<string, string>;
  isQueryValid: boolean;
  setStatus: (status: SearchStatus) => void;
}) {
  return (
    <div
      className="absolute z-20 w-full bg-white"
      style={{ boxShadow: 'inherit', borderRadius: 'inherit' }}
    >
      {(status == SearchStatus.loading || status == SearchStatus.success) &&
        isQueryValid && (
          <div className="w-full pb-2">
            {Object.entries(suggestionsResults).map((suggestionObj) => {
              const [key, suggestion] = suggestionObj;
              return (
                <a
                  onClick={() => {
                    location.replace(`/googleit/#/search?q=${suggestion}`);
                    // Because the search page is not reloaded when the user clicks on a suggestion because of the router ):
                    if (location.href.includes('search')) location.reload();
                  }}
                  className="flex cursor-pointer items-center px-3 py-1 font-semibold hover:bg-[#F8F9FA]"
                  key={key}
                >
                  <MaterialSymbolsSearchRounded className="ml-1 mr-3 text-[#9AA0A6]" />
                  <span className="select-none"> {suggestion}</span>
                </a>
              );
            })}
            {Object.keys(suggestionsResults).length === 0 &&
              status && ( // No results found
                <div className="py-3 text-center text-[#9AA0A6]">
                  {status == SearchStatus.loading
                    ? 'Loading...'
                    : 'No results found (press enter to search)'}
                </div>
              )}
          </div>
        )}
    </div>
  );
}

export default SearchSuggetions;
