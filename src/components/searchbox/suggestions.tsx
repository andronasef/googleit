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
    <>
      {(status == SearchStatus.loading || status == SearchStatus.success) &&
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
                  {status == SearchStatus.loading
                    ? 'Loading...'
                    : 'No results found (press enter to search)'}
                </div>
              )}
          </div>
        )}
    </>
  );
}

export default SearchSuggetions;
