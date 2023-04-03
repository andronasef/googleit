import SearchResult from './search_result';

function SearchResults({ results }: { results: Record<string, string> }) {
  return (
    <ul className="flex flex-col gap-5">
      {Object.entries(results).map((result) => {
        return <SearchResult resultData={result[1]} key={result[0]} />;
      })}
    </ul>
  );
}

export default SearchResults;
