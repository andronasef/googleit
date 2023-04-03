import GoogleLogo from './google_logo';
import SearchBox from './searchbox';

function ResultsSearchBox() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 pb-5 lg:flex-row">
      <GoogleLogo size={100} />
      <SearchBox />
    </div>
  );
}

export default ResultsSearchBox;
