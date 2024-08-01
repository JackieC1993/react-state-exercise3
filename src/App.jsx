import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    const newBoard = [...board];
    if (!newBoard[index]) {
      newBoard[index] = newBoard.filter(Boolean).length % 2 === 0 ? 'O' : 'X'; // Alternate between 'O' and 'X'
      setBoard(newBoard);
    }
  };

  return (
    <div className="container">
      {board.map((value, index) => (
        <div
          key={index}
          className={`box ${value === 'O' ? 'circle' : value === 'X' ? 'x' : ''}`} // Added a class for the X
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: value === 'O' ? 'lightgray' : value === 'X' ? 'gray' : 'white',
            color: value === 'O' || value === 'X' ? 'black' : 'transparent',
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default App;