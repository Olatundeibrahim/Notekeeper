import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiPlus } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">NoteKeeper</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-300 transition">
            <HiHome className="inline-block mr-1" /> Home
          </Link>
          <Link to="/add" className="hover:text-blue-300 transition">
            <HiPlus className="inline-block mr-1" /> Add Note
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
