import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
   <div className="w-full flex justify-between items-center py-4 px-8 shadow">
  <img src={logo} alt="BookNote" className="h-10" />
  
  <ul className="flex space-x-4">
   <Link to='/dashboard'><li className="text-black hover:text-blue-600">Dashboard</li></Link> 
    <Link to='/Notes'><li className="text-black hover:text-blue-600">Notes</li></Link>
    <Link to='/Add Notes'><li className="text-black hover:text-blue-600">Add Notes</li></Link>
  </ul>

  <div className="flex items-center space-x-4">
    <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
    <button className="px-3 py-1 bg-blue-600 text-white rounded">Logout</button>
  </div>
</div>

  )
}

export default Navbar