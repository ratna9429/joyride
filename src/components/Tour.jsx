import React from "react";

const Tour = ({ message, onClose }) => {
  return (
    <div className="tour">
      <div className="tour-message">{message}</div>
      <button onClick={onClose}>Close Tour</button>
    </div>
  );
};

export default Tour;
