import { useState } from 'react';
import logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }


    const user = data.user;

    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: user.id,
          name,
          surname,
          email,
        },
      ]);

    if (profileError) {
      setError(profileError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 pt-12">
      <img src={logo} alt="BookNote" className="h-32 mb-4" />

      <form onSubmit={handleSubmit} className="max-w-md w-full">
        <h2 className="font-bold pb-2">Create an account</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          className="w-full p-2 mt-4 border rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-2 mt-4 border rounded"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <input
          className="w-full p-2 mt-4 border rounded"
          type="email"
          placeholder="Email"
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
          disabled={loading}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? 'Signing up...' : 'Sign up'}
        </button>

        <p className="mt-4">
          Already have an account? <Link to="/sign in">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
