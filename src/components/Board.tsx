// import { useState } from 'react';
// import Cell from './Cell';

const Board = () => {
  const Grid = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));

  const Puzzle = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));
  // User inputs stored
  // const [inputs, setInputs] = useState<string[]>(Array(9).fill(''));

  // // Shuffle the numbers in the grid array
  // function shuffle(array: number[]) {
  //   const result = [...array];
  //   for (let i = result.length - 1; i > 0; i--) {
  //     const randomindex = Math.floor(Math.random() * (i + 1));
  //     [result[i], result[randomindex]] = [result[randomindex], result[i]];
  //   }
  //   return result;
  // }

  // // Makes some of the numbers 0 so we have our input fields
  // function inputCells(array: number[]) {
  //   const result = [...array];
  //   const randomindex = Math.floor(Math.random() * result.length);
  //   result[randomindex] = 0;
  //   return result;
  // }

  // function handleCellChange(index: number, newValue: string) {
  //   setInputs((prev) => {
  //     const updated = [...prev];
  //     updated[index] = newValue;
  //     return updated;
  //   });
  // }
  // :border-r-2

  return (
    <div className="bg-gray-300">
      <table className="border-2 border-slate-600">
        <tbody>
          {Grid.map((row, rIdx) => {
            return (
              <tr key={rIdx} className="nth-3:border-b nth-6:border-b">
                {row.map((cell, cIdx) => {
                  const isPrefilled = Puzzle[rIdx][cIdx] !== null;
                  return (
                    <td key={cIdx} className="nth-3:border-r nth-6:border-r">
                      <input
                        className="w-10 border border-gray-500"
                        type="text"
                        maxLength={1}
                        value={cell === null ? '' : cell}
                        readOnly={isPrefilled}
                        onFocus={() => {}}
                        onClick={() => {}}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
