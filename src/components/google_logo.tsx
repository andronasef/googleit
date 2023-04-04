function GoogleLogo({ size = 200 }) {
  const isNotHomepage = !(window.location.pathname === '/googleit');
  const googleImg = (
    <img
      className="h-full"
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    />
  );
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: size,
        height: '100%',
      }}
    >
      {isNotHomepage ? (
        <a href={isNotHomepage ? '/googleit' : ''}>{googleImg}</a>
      ) : (
        <>{googleImg}</>
      )}
    </div>
  );
}

export default GoogleLogo;
