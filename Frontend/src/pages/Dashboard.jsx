import { Link } from 'react-router-dom';
import { Plus, BookOpen } from 'lucide-react';

function Dashboard() {
  return (
    <div className="p-10 max-w-[1200px] mx-auto">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">
        Welcome back to your Dashboard!
      </h1>
      <p className="text-gray-600 mb-8">
        What would you like to do today?
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Add Note */}
        <Link to="/add notes">
          <div className="cursor-pointer bg-blue-800 text-white rounded-2xl p-8 hover:scale-105 transition">
            <Plus className="w-10 h-10 mb-3" />
            <h2 className="text-xl font-bold">Add New Note</h2>
            <p className="text-gray-200">
              Create a new note quickly
            </p>
          </div>
        </Link>

        {/* View Notes */}
        <Link to="/notes">
          <div className="cursor-pointer bg-gray-800 text-white rounded-2xl p-8 hover:scale-105 transition">
            <BookOpen className="w-10 h-10 mb-3" />
            <h2 className="text-xl font-bold">View Notes</h2>
            <p className="text-gray-200">
              See all your saved notes
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;
