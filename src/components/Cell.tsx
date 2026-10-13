import { useState } from 'react';

type CellProps = {
  defaultValue: number;
};

const Cell = ({ defaultValue }: CellProps) => {
  const [value, setValue] = useState(defaultValue === 0 ? '' : defaultValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <div className="border-2 border-slate-500">
      <input type="text" maxLength={1} value={value} onChange={handleChange} />
    </div>
  );
};

export default Cell;
