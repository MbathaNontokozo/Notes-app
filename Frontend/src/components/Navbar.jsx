import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { supabase } from '../lib/supabaseClient';

function Navbar() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    navigate('/sign in');
  };

  return (
    <div className="w-full flex justify-between items-center py-4 px-8 shadow">
      
      <img src={logo} alt="BookNote" className="h-10" />

    
      <ul className="flex space-x-4">
        <li>
          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/notes" className="hover:text-blue-600">
            Notes
          </Link>
        </li>
        <li>
          <Link to="/add notes" className="hover:text-blue-600">
            Add Notes
          </Link>
        </li>
      </ul>

     
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-2 py-1"
        />

        <button
          onClick={handleLogOut}
          disabled={loading}
          className={`px-3 py-1 rounded text-white
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
          `}
        >
          {loading ? 'Logging out...' : 'Logout'}
        </button>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

export default Navbar;
