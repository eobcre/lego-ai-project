import { useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

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
      setResult("Error.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-8">
        <Buttons />
        <Input text={text} setText={setText} send={send} />
      </div>
    </div>
  );
};

export default App;