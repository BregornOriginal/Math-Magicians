import React from 'react';
import './button.css';

function buttonCard({ children }) {
  return (
    <div className="buttonBox">
      {children}
    </div>
  );
}

export default buttonCard;
