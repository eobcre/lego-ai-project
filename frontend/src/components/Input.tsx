import { Icon } from "@iconify/react";

type InputProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  send: () => Promise<void>;
};

const Input: React.FC<InputProps> = ({ text, setText, send }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a command (e.g forward)"
        className="border px-3 py-2 rounded w-full"
      />
      <button
        onClick={send}
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-60"
      >
        <Icon icon="material-symbols:send" width="24" height="24" />
      </button>
    </div>
  );
};

export default Input;
