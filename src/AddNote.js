import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (noteText.trim()) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={noteText}
        onChange={handleChange}
        placeholder="Write your note here..."
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
