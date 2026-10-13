import Cell from './Cell';

const Board = () => {
  const Grid: number[] = Array.from({ length: 9 }, (_, index) => index + 1);

  shuffle(Grid);

  function shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));

      [array[i], array[random]] = [array[random], array[i]];
    }
  }

  return (
    <div className="grid grid-cols-3">
      {Grid.map((number, index) => (
        <Cell key={index} defaultValue={number} />
      ))}
    </div>
  );
};

export default Board;
