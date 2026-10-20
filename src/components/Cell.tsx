type CellProps = {
  defaultValue: number;
  inputValue: string;
  onChange: (value: string) => void;
};

const Cell = ({ defaultValue, inputValue, onChange }: CellProps) => {
  const isEditable = defaultValue === 0;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.currentTarget.value);
  }

  return (
    <div className="border border-slate-500">
      <input
        type="text"
        maxLength={1}
        value={isEditable ? inputValue : defaultValue}
        readOnly={!isEditable}
        onChange={handleChange}
        className="focus:outline-none focus:bg-cyan-500/30"
      />
    </div>
  );
};

export default Cell;
