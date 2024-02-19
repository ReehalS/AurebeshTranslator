// AurebeshKeyboard.js
import React from 'react';

const AurebeshKeyboard = ({ onKeyClick }) => {
  const qwertyRows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','[',']','\\'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
  ];

  return (
    <div className="aurebesh-keyboard">
      {qwertyRows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button key={key} className="btn btn-outline-secondary keyboard-key au size24" onClick={() => onKeyClick(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AurebeshKeyboard;
