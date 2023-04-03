import MaterialSymbolsSearchRounded from '~icons/material-symbols/search-rounded';
import SearchStatus from './status_enum';

function SearchSuggetions({
  status,
  suggestionsResults,
  isQueryValid,
}: {
  status: SearchStatus;
  suggestionsResults: Record<string, string>;
  isQueryValid: boolean;
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
                  href={`/search?q=${suggestion}`}
                  className="flex items-center px-3 py-1 font-semibold hover:bg-[#F8F9FA]"
                  key={key}
                >
                  <MaterialSymbolsSearchRounded className="ml-1 mr-3 text-[#9AA0A6]" />
                  <span> {suggestion}</span>
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
