import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import type { ValidationResult } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    const validationResult: ValidationResult = checkValidData(
      email.current?.value,
      password.current?.value,
      !isSignInForm ? name.current?.value : undefined
    );
    console.log(validationResult);
    if (!validationResult.isValid) {
      setErrorMsg(validationResult.error);
      return;
    }
    setErrorMsg(undefined);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current!.value,
          })
            .then(() => {
              const currentUser = auth.currentUser;
              if (currentUser) {
                const { uid, email, displayName } = currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    isAuthenticated: true,
                  })
                );
              } else {
                setErrorMsg('User not found after sign up.');
              }
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          console.log(errorCode, errorMsg);
          setErrorMsg(errorMsg);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      ).catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        console.log(errorCode, errorMsg);
        setErrorMsg(errorMsg);
      });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="fixed inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-white rounded-xl opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm ? (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        ) : (
          <></>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button
          className="p-4 my-6 bg-red-600 w-full cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        {errorMsg && <div className="text-red-500 py-2">{errorMsg}</div>}
        <p className="py-4">
          {isSignInForm ? (
            <>
              New to Netflix?{' '}
              <span
                onClick={toggleSignInForm}
                className="cursor-pointer underline"
              >
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already registered?{' '}
              <span
                onClick={toggleSignInForm}
                className="cursor-pointer underline"
              >
                Sign In Now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
