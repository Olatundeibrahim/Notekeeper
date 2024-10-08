import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import AddNote from '../components/AddNote';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNote, setEditingNote] = useState(null); // For editing notes

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (note) => {
    if (editingNote) {
      const updatedNotes = notes.map(n => n.id === editingNote.id ? note : n);
      setNotes(updatedNotes);
      setEditingNote(null);
    } else {
      setNotes([...notes, { ...note, id: notes.length + 1 }]);
    }
  };

  // Delete a note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  // Edit a note
  const editNote = (note) => {
    setEditingNote(note);
  };

  // Filter notes based on search query
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Notes</h1>
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search notes..."
        className="border rounded p-2 mb-4 w-full md:w-1/3"
      />

      <AddNote addNote={addNote} editingNote={editingNote} />

      {filteredNotes.length === 0 ? (
        <p className="text-gray-500">No notes found.</p>
      ) : (
        <NoteList notes={filteredNotes} deleteNote={deleteNote} editNote={editNote} />
      )}
    </div>
  );
};

export default Home;
