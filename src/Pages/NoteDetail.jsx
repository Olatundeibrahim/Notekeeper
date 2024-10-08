import React from 'react';
import { useParams, Link } from 'react-router-dom';

const NoteDetail = ({ notes }) => {
  const { id } = useParams();
  const note = notes.find(note => note.id === parseInt(id));

  return (
    <div className="p-4 bg-white rounded shadow">
      {note ? (
        <>
          <h2 className="text-2xl font-bold mb-2">{note.title}</h2>
          <p>{note.content}</p>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Notes</Link>
        </>
      ) : (
        <p>Note not found</p>
      )}
    </div>
  );
};

export default NoteDetail;
