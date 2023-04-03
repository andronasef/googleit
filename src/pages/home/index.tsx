import GoogleLogo from '../../components/google_logo';
import SearchBox from '../../components/searchbox';
import Skelton from '../../components/skeleton';

function Homepage() {
  return (
    <>
      <Skelton />
      <div className="flex flex-col items-center justify-start w-full gap-5 pb-10 mt-16">
        <GoogleLogo size={200} />
        <SearchBox />
      </div>
    </>
  );
}

export default Homepage;
