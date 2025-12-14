import { useState } from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate('/dashboard');
  };

  const isDisabled = loading || !email || !password;

  return (
    <div className="flex flex-col items-center justify-center px-4 pt-12">
      <img src={logo} alt="BookNote" className="h-32 mb-4 " />

      <p className="text-xl font-bold">Welcome!</p>

      <form onSubmit={handleLogin} className="w-full max-w-sm mt-6">
        <h2 className="font-bold pb-2">Sign In</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          className="w-full p-2 mt-4 border rounded"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mt-4 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={isDisabled}
          className={`mt-6 px-4 py-2 rounded text-white
            ${
              isDisabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }
          `}
        >
          {loading ? 'Please wait...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
