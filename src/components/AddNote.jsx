import React, { useState, useEffect } from 'react';

const AddNote = ({ addNote, editingNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    addNote({
      id: editingNote ? editingNote.id : new Date().getTime(),
      title,
      content
    });

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-2xl font-bold mb-2">
        {editingNote ? 'Edit Note' : 'Add Note'}
      </h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border rounded p-2 mb-2 w-full"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="border rounded p-2 mb-2 w-full h-32"
        required
      />
      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
        {editingNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default AddNote;
