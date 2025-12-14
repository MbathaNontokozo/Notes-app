import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useNotes } from '../context/NotesContext.jsx'; 

function Addnotes() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { addNote } = useNotes(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return; // simple validation

    
    addNote({ title, description });

  
    setTitle('');
    setDescription('');
    setShowForm(false);
  };

  return (
    <div className="relative w-full min-h-screen p-10 bg-white">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
       
        <div
          onClick={() => setShowForm(!showForm)}
          className="cursor-pointer bg-blue-800 border-dashed border-2 border-white rounded-2xl flex flex-col justify-center items-center gap-2 p-5 hover:scale-105 transition-transform"
        >
          <Plus  />
          <p className="text-white">Add a new note</p>
        </div>

   
        {showForm && (
          <div className="bg-blue-800 border border-white rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Add New Note</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded-md border border-white text-black"
              />
              <textarea
                placeholder="Enter Description..."
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 rounded-md border border-white text-black"
              />
              <button
                type="submit"
                className="bg-black text-white py-2 rounded-xl font-bold"
              >
                Add Note
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Addnotes;
