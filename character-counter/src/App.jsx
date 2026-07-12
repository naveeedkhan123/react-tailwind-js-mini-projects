import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-blue-300 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Character Counter
        </h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full border p-3 rounded-lg h-40"
        />

        <h2 className="mt-4 text-xl font-semibold">
          Characters: {text.length}
        </h2>
      </div>
    </div>
  );
}

export default App;