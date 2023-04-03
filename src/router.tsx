import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/home';
import Search from './pages/search';

const router = createBrowserRouter([
  {
    path: '/googleit',
    element: <Homepage />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/googleit/search',
    element: <Search />,
  },
]);

export default router;
