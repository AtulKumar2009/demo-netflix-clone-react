import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
        <img className="w-44" src={LOGO} alt="Netflix logo" />
      </div>
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Lost your way?</h1>
        <p className="text-lg md:text-xl mb-8 text-center">
          Sorry! We can't find the page you're looking for.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
        >
          Go Home
        </button>
        <div className="mt-4 text-sm">
          Error Code: <span className="font-mono">404</span>
        </div>
      </div>
    </div>
  );
};

export default Error404;
