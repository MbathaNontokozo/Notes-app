import React from 'react';
import Navbar from '../components/Navbar';

function Layout({ children }) {
  return (
    <div>
      {/* Navbar will only appear on pages wrapped in Layout */}
      <Navbar />

      {/* This is where the page content will be displayed */}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
