import { Icon } from "@iconify/react";

type InputProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  send: () => Promise<void>;
};

const Input = ({ text, setText, setResult, send }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setResult("");
  };
  return (
    <div className="relative ml-2.5 w-60">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type a command..."
        className="text-gray-300 border border-gray-300 placeholder-gray-500 outline-none rounded px-3 py-2 w-full"
      />
      <button onClick={send} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer hover:opacity-60">
        <Icon icon="material-symbols:send" width="24" height="24" />
      </button>
    </div>
  );
};

export default Input;
