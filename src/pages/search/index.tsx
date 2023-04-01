import { useEffect } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { getSearchResults } from '../../utils/api';
import {
  getDomainNamefromUrl,
  getFaviconFromUrl,
} from '../../utils/results_helpers';

export async function loader({ request }: { request: any }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  if (!q) {
    throw new Error('No search query provided');
  }
  const searchResults = await getSearchResults(q);
  return { searchResults };
}

function Search() {
  const { searchResults } = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  useEffect(() => {
    console.log(searchResults);
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <h1>Search Results</h1>
      <ul>
        {Object.entries(searchResults).map((result) => {
          const id = result[0];
          const { title, description, url } = result[1];

          const img = getFaviconFromUrl(url);
          const domainName = getDomainNamefromUrl(url);
          return (
            <li key={id}>
              <img src={img} alt="" />
              {domainName}
              <a className="text-blue-400" href={url}>
                {title}
              </a>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Search;
