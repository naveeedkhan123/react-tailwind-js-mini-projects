import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Counter App</h1>

        <h2
  className={`text-5xl font-bold mb-6 ${
    count === 0
      ? "text-gray-500"
      : count < 10
      ? "text-blue-500"
      : "text-green-500"
  }`}
>
  {count}
</h2>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            className="bg-red-500 text-white px-6 py-2 rounded"
          >
            -
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-6 py-2 rounded"
          >
            +
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-green-500 text-white px-6 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;