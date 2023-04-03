import SearchResult from './search_result';
import SkeltonSearchResult from './skelton-search_result';

function SearchResults({ results }: { results: Record<string, string> }) {
  return (
    <ul className="flex flex-col md:w-full gap-5 w-[90%] ">
      {Object.entries(results).length > 0
        ? Object.entries(results).map((result) => {
            return <SearchResult resultData={result[1]} key={result[0]} />;
          })
        : Array.from(Array(10).keys()).map((i) => {
            return <SkeltonSearchResult key={i} />;
          })}
    </ul>
  );
}

export default SearchResults;
