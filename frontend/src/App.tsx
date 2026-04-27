import { useState } from "react";
import Input from "./components/Input";
import bg from "./assets/bg.png";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const send = async () => {
    try {
      const res = await fetch(`${API_URL}/api/nlp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setResult("Connection Error...");
    } finally {
      setText("");
    }
  };

  return (
    <div className="relative w-full overflow-hidden h-screen">
      <img src={bg} alt="background" className="absolute inset-0 object-cover w-full h-full" />
      <div className="relative z-10 flex flex-col justify-start items-center gap-4 pt-64 w-full">
        <Input text={text} setText={setText} setResult={setResult} send={send} />
        <p className="text-red-500 text-sm">{result}</p>
      </div>
    </div>
  );
};

export default App;
