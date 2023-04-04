import {
  getDomainNamefromUrl,
  getFaviconFromUrl,
  getTitleCase,
} from '../../utils/results_helpers';

function SearchResult({ resultData }: { resultData: any }) {
  const { title, description, url } = resultData;
  const decodedTitle = decodeURIComponent(title)
    ? decodeURIComponent(title)
    : title;
  const decodeDescription = decodeURIComponent(description)
    ? decodeURIComponent(description)
    : description;

  const img = getFaviconFromUrl(url);
  const domainName = getDomainNamefromUrl(url);
  return (
    <li className="flex flex-col gap-1">
      {/* Title */}
      <a href={url}>
        <div className="flex items-center m">
          {/* dark cirlce backgroud for image using tailwind */}
          <div className="relative w-7 h-7 mr-2 bg-[#F1F3F4] rounded-full">
            <img
              src={img}
              alt={`${domainName} Website`}
              className="absolute top-0 bottom-0 left-0 right-0 w-4 h-4 m-auto"
            />
          </div>

          <span className="">{getTitleCase(domainName)}</span>
        </div>
      </a>
      {/* Link */}
      <a
        className="font-medium text-[#1a0dab] max-w-fit hover:underline"
        href={url}
      >
        {decodedTitle}
      </a>
      <p>{decodeDescription}</p>
    </li>
  );
}

export default SearchResult;
