import Cell from './Cell';

const Board = () => {
  const Grid: number[] = [5, 3, 2, 1, 6, 5, 0, 8, 9];

  return (
    <div className="grid grid-cols-3">
      {Grid.map((number, index) => (
        <Cell key={index} defaultValue={number} />
      ))}
    </div>
  );
};

export default Board;
