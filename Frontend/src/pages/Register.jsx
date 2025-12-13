import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';

function Register() {
  const { session } = useAuthContext();
  console.log("Session:", session);

  // form states
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // navigation (to dashboard)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add validation here if needed

    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Email:", email);
    console.log("Password:", password);

    // After successful signup → navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 pt-12">
      <img src={logo} alt="BookNote" className="h-32 object-contain mb-4" />

      <form onSubmit={handleSubmit} className="max-w-md m-auto pt-20">
        <h2 className="font-bold pb-2">Create an account!</h2>

        <p>
          Already have an account? <Link to="/sign in">Sign In!</Link>
        </p>

        <div className="flex flex-col py-4">

          <input
            className="w-full p-2 mt-8 border rounded-md"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full p-2 mt-8 border rounded-md"
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

          <input
            className="w-full p-2 mt-8 border rounded-md"
            type="email"
            placeholder="Email Account"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full p-2 mt-8 border rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="mt-6 w-auto px-3 py-1 bg-blue-600 text-white rounded"
          >
            Sign up
          </button>

        </div>
      </form>
    </div>
  );
}

export default Register;
