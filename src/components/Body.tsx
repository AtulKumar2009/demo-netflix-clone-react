import Login from './Login';
import Browse from './Browse';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import type { RootState } from '../utils/appStore';

const Body = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            isAuthenticated: true,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
