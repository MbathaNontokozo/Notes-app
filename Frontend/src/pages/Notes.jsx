import React from 'react';

function Notes() {
  const notes = [
    {
      id: 1,
      title: 'React Basics',
      description: 'Learn components, props, and state.'
    },
    {
      id: 2,
      title: 'Supabase',
      description: 'Auth, database, and API usage.'
    },
    {
      id: 3,
      title: 'Tailwind CSS',
      description: 'Utility-first styling approach.'
    }
  ];

  return (
    <div className="p-10 max-w-[1200px] mx-auto">

      <h1 className="text-3xl font-bold mb-6">My Notes</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map(note => (
          <div
            key={note.id}
            className="bg-blue-800 text-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">
              {note.title}
            </h2>
            <p className="text-gray-200">
              {note.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Notes;
