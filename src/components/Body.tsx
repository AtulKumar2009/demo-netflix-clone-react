import Login from './Login';
import Browse from './Browse';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../utils/appStore';

const Body = () => {
  const user = useSelector((store: RootState) => store.user);
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: user.isAuthenticated ? <Navigate to="/browser" /> : <Login />,
    },
    {
      path: '/browser',
      element: user.isAuthenticated ? <Browse /> : <Navigate to="/" />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
