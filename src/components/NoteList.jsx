import React from 'react';

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <div key={note.id} className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p>{note.content}</p>
          <div className="flex justify-between mt-2">
            <button 
              onClick={() => editNote(note)} 
              className="bg-yellow-500 text-white rounded px-4 py-2 hover:bg-yellow-600"
            >
              Edit
            </button>
            <button 
              onClick={() => deleteNote(note.id)} 
              className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
