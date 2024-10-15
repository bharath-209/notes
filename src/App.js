import React, { useState, useEffect } from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const App = () => {
  // Load notes from local storage or set to an empty array
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Use useEffect to save notes to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (text) => {
    const newNotes = [...notes, { text }];
    setNotes(newNotes);
  };

  // Delete a note by index
  const deleteNote = (id) => {
    const newNotes = notes.filter((note, index) => index !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>Notes</h1>
      <AddNote handleAddNote={addNote} />
      <NotesList notes={notes} handleDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
