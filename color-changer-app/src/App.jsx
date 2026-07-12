import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("bg-white");

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${bgColor}`}
    >
      <h1 className="text-4xl font-bold mb-8">
        Color Changer App
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => setBgColor("bg-red-500")}
          className="bg-red-500 text-white px-5 py-2 rounded"
        >
          Red
        </button>

        <button
          onClick={() => setBgColor("bg-blue-500")}
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          Blue
        </button>

        <button
          onClick={() => setBgColor("bg-green-500")}
          className="bg-green-500 text-white px-5 py-2 rounded"
        >
          Green
        </button>

        <button
          onClick={() => setBgColor("bg-yellow-500")}
          className="bg-yellow-500 text-white px-5 py-2 rounded"
        >
          Yellow
        </button>


        <button
          onClick={() => setBgColor("bgColor")}
          className="bg-black text-white px-5 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;