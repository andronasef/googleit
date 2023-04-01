import SeachBox from '../../components/searchbox';

function Homepage() {
  return (
    <>
      <div className="flex flex-col justify-start items-center pb-10 gap-5 w-full mt-16">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
          width="200"
        />
        <SeachBox />
      </div>
    </>
  );
}

export default Homepage;
