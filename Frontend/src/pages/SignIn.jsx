import React, { useState } from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/dashboard'); 
  };

  return (
    <div className='flex flex-col items-center justify-center px-4 pt-12'>
      <img src={logo} alt="BookNote" className="w-32 h-32 object-contain mb-4" />
      <p className='text-xl font-bold text-center'>Welcome!</p>

      <form onSubmit={handleSubmit} className='w-full max-w-sm mt-6'>
        <h2 className='font-bold pb-2'>Sign In!</h2>
        <div className='flex flex-col py-4'>
          <input
            className='w-full p-2 mt-8 border rounded-md'
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='w-full p-2 mt-8 border rounded-md'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='mt-6 w-auto px-3 py-1 bg-blue-600 text-white rounded'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
