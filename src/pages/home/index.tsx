import GoogleLogo from '../../components/google_logo';
import SearchBox from '../../components/searchbox';

function Homepage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-5 pb-10 mt-16">
        <GoogleLogo size={200} />
        <SearchBox />
      </div>
    </>
  );
}

export default Homepage;
