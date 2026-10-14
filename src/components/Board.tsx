import { useState } from 'react';
import Cell from './Cell';

const Board = () => {
  // Our boards numbers stored
  const [grid, setGrid] = useState<number[]>(Array.from({ length: 9 }, (_, index) => index + 1));

  // User inputs stored
  const [inputs, setInputs] = useState<string[]>(Array(9).fill(''));

  // Shuffle the numbers in the grid array
  function shuffle(array: number[]) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const randomindex = Math.floor(Math.random() * (i + 1));
      [result[i], result[randomindex]] = [result[randomindex], result[i]];
    }
    return result;
  }

  // Makes some of the numbers 0 so we have our input fields
  function inputCells(array: number[]) {
    const result = [...array];
    const randomindex = Math.floor(Math.random() * result.length);
    result[randomindex] = 0;
    return result;
  }

  function handleCellChange(index: number, newValue: string) {
    setInputs((prev) => {
      const updated = [...prev];
      updated[index] = newValue;
      return updated;
    });
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <button onClick={() => setGrid(shuffle(grid))}>Shuffle</button>
        <button onClick={() => setGrid(inputCells(grid))}>Empty some fields</button>
      </div>
      <div className="grid grid-cols-3">
        {grid.map((number, index) => (
          <Cell
            key={index}
            defaultValue={number}
            inputValue={inputs[index]}
            onChange={(v) => handleCellChange(index, v)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
