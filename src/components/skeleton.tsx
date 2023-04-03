function Skelton({ width = 1, height = 1.5, style = {} }) {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div
        style={{
          width: `${width * 0.5}rem`,
          height: `${height * 0.5}rem`,
          ...style,
        }}
        className="bg-gray-200 rounded-full mb-2.5"
      ></div>{' '}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Skelton;
