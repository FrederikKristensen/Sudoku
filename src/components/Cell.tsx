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
    <div className="border-2 border-slate-500">
      <input
        type="text"
        maxLength={1}
        value={isEditable ? inputValue : defaultValue}
        readOnly={!isEditable}
        onChange={handleChange}
      />
    </div>
  );
};

export default Cell;
