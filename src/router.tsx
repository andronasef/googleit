import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/home';
import Search, { loader as searchLoader } from './pages/search';

const router = createBrowserRouter([
  {
    index: true,
    element: <Homepage />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/search',
    element: <Search />,
    loader: searchLoader,
  },
]);

export default router;
