import React from 'react';
import axios from 'axios';

const DeleteButton = ({ hospitalId, onDelete }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this hospital?");
    if (confirmDelete) {
      try {
        const response = await axios.delete(`/api/delete/${hospitalId}`);
        if (response.status === 200) {
          alert(response.data.msg);
          if (onDelete) {
            onDelete(hospitalId); // Update parent component or state if necessary
          }
        } else {
          alert("Error deleting hospital");
        }
      } catch (error) {
        console.error("Error deleting hospital:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
