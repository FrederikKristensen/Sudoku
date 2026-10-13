import { useState } from 'react';

function Cell() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <div className="border-2 border-slate-500">
      <input type="text" maxLength={1} value={value} onChange={handleChange} />
    </div>
  );
}

export default Cell;
