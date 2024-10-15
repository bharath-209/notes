import React, { useState } from 'react';

const Note = ({ id, text, handleDeleteNote, handleEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSaveEdit = () => {
    handleEditNote(id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <textarea
          value={editedText}
          onChange={handleEditChange}
        ></textarea>
      ) : (
        <p>{text}</p>
      )}
      <button onClick={() => handleDeleteNote(id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleSaveEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Note;
