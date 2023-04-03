import { createHashRouter } from 'react-router-dom';
import Homepage from './pages/home';
import Search from './pages/search';

const router = createHashRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

export default router;
