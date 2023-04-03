import Skelton from '../skeleton';

function SkeltonSearchResult() {
  const randomWidth = (w: number) => Math.floor(Math.random() * w) + 20;
  return (
    <div className="flex flex-col items-start w-full gap-1">
      {/* Title */}
      <div className="flex items-center mb-1">
        <Skelton
          width={4}
          height={4}
          style={{ borderRaduis: '100%', marginRight: '.5rem' }}
        />

        <Skelton width={randomWidth(10)} height={2} />
      </div>
      {/* Link */}
      <Skelton width={randomWidth(35)} />
      <Skelton width={randomWidth(25)} />
    </div>
  );
}

export default SkeltonSearchResult;
