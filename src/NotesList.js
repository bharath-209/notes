import React from 'react';
import Note from './Note';

const NotesList = ({ notes, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          text={note.text}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
