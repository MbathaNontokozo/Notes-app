import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import AddNotes from './pages/AddNotes';

function App() {
  return (
    <Routes>

      
      <Route path="/sign in" element={<SignIn />} />
      <Route path="/" element={<Register />} />

      
      <Route 
        path="/dashboard" 
        element={
          <Layout>
            <Dashboard />
          </Layout>
        } 
      />
      <Route 
        path="/notes" 
        element={
          <Layout>
            <Notes />
          </Layout>
        } 
      />
      <Route 
        path="/add notes" 
        element={
          <Layout>
            <AddNotes />
          </Layout>
        } 
      />

    </Routes>
  );
}

export default App;
