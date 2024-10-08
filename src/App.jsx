import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import AddNote from './components/AddNote'
import NoteDetail from './pages/NoteDetail';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: notes.length }]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddNote addNote={addNote} />} />
          <Route path="/notes/:id" element={<NoteDetail notes={notes} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
