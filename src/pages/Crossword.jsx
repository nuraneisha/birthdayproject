import React, { useState } from 'react';
import '../Crosswords.css';

const clues = [
  { number: 1, word: 'SIAO', clue: 'our group name', direction: 'across', start: [2, 2], end: [2, 5] },
  { number: 2, word: 'HTTYD', clue: 'my comfort movie', direction: 'across', start: [8, 3], end: [3, 7] },
  { number: 3, word: 'MATCHA', clue: 'my favourite drink', direction: 'down', start: [10, 7], end: [10, 5] },
  { number: 4, word: 'ICECREAM', clue: 'first date', direction: 'across', start: [10, 0], end: [0, 7] },
  { number: 5, word: 'BLOODBROTHERS', clue: 'first movie', direction: 'down', start: [0, 5], end: [0, 12] },
  { number: 6, word: 'JUNGKOOK', clue: 'BTS favourite member', direction: 'across', start: [3, 0], end: [3, 7] },
];

function generateGrid(clues) {
  let maxRow = 0;
  let maxCol = 0;

  clues.forEach(({ word, direction, start }) => {
    const [row, col] = start;
    if (direction === 'down') {
      maxRow = Math.max(maxRow, row + word.length);
      maxCol = Math.max(maxCol, col + 1);
    } else {
      maxRow = Math.max(maxRow, row + 1);
      maxCol = Math.max(maxCol, col + word.length);
    }
  });

  const grid = Array.from({ length: maxRow }, () =>
    Array.from({ length: maxCol }, () => null)
  );

  clues.forEach(({ number, word, direction, start }) => {
    const [row, col] = start;
    for (let i = 0; i < word.length; i++) {
      const r = direction === 'down' ? row + i : row;
      const c = direction === 'across' ? col + i : col;
      if (!grid[r][c]) {
        grid[r][c] = { value: '', number: null };
      }
    }
    if (grid[row][col]) {
      grid[row][col].number = number;
    }
  });

  return grid;
}

export default function Crosswords() {
  const [grid, setGrid] = useState(generateGrid(clues));
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  // <-- add this line

  const handleChange = (row, col, val) => {
    const updated = [...grid];
    updated[row][col].value = val.toUpperCase();
    setGrid(updated);
  };

  const checkAnswers = () => {
    const allCorrect = clues.every(({ word, direction, start }) => {
      const [row, col] = start;
      for (let i = 0; i < word.length; i++) {
        const r = direction === 'down' ? row + i : row;
        const c = direction === 'across' ? col + i : col;
        if (!grid[r][c] || grid[r][c].value !== word[i]) {
          return false;
        }
      }
      return true;
    });

    if (allCorrect) {
      setShowPopup(true);
      setErrorMessage('');  // clear error when correct
    } else {
      setErrorMessage('its wrong.. sayang dont love me anymore..');  // <-- put message inside quotes
    }
  };

  const acrossClues = clues.filter(c => c.direction === 'across');
  const downClues = clues.filter(c => c.direction === 'down');

  return (
    <div className="crossword-wrapper">
      <div className="content-wrapper">
        <h2 className="title">solve this puzzle!</h2>
        <p>hi baby! welcome to the game part!</p>
        <p>hope you enjoy the game ♥️ & make sure u answer all correctly!!</p>

        <div className="baby">
          <div className="crossword-grid">
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="grid-row">
                {row.map((cell, colIndex) =>
                  cell ? (
                    <div key={colIndex} className="cell">
                      {cell.number && <span className="number">{cell.number}</span>}
                      <input
                        maxLength="1"
                        value={cell.value}
                        onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                      />
                    </div>
                  ) : (
                    <div key={colIndex} className="cell blank" />
                  )
                )}
              </div>
            ))}
          </div>

          <div className="clues">
            <div className="clue-section">
              <h3>Across</h3>
              <ul>
                {acrossClues.map(clue => (
                  <li key={clue.number}>
                    <strong>{clue.number}.</strong> {clue.clue}
                  </li>
                ))}
              </ul>
            </div>

            <div className="clue-section">
              <h3>Down</h3>
              <ul>
                {downClues.map(clue => (
                  <li key={clue.number}>
                    <strong>{clue.number}.</strong> {clue.clue}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="check-button" onClick={checkAnswers}>Check Answers</button>

          {/* Show error message if any */}
          {errorMessage && <p className="error-text">{errorMessage}</p>}

        </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <h2>yayyy!! congrats baby </h2>
            <p>here's a kiss 😘💋</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
