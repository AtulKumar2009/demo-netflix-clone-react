import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../utils/appStore';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_ICON } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).catch(() => {
      navigate('/error');
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate('/browser');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);
  const user = useSelector((store: RootState) => store.user);
  return (
    <div className="absolute justify-between flex px-2 md:px-8 pr-8 py-2 w-screen bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user.isAuthenticated && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={USER_ICON} alt="userIcon" />
          <button
            className="font-bold text-white cursor-pointer underline"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
