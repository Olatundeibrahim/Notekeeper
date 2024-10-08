import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Add Note</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border rounded p-2 mb-2 w-full"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="border rounded p-2 mb-2 w-full h-32"
      />
      <button type="submit" className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
