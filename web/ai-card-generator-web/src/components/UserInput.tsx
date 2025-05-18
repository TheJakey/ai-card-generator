interface UserInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

const UserInput = ({ value, onChange, onSubmit }: UserInputProps) => {
  return (
    <div className="w-3xl mx-auto">
      <div className="flex flex-row">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="I want my cards to be about..."
          className="w-full px-2 border border-gray-300 rounded-l-2xl"
        />
        <button
          onClick={() => onSubmit(value)}
          className="border border-gray-300 p-2 rounded-r-2xl w-40 font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:cursor-pointer"
        >
          Try me now
        </button>
      </div>
    </div>
  );
};

export default UserInput;
