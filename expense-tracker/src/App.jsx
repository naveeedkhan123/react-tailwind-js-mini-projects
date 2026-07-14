import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const [expenses, setExpenses] = useState([]);

  const [filter, setFilter] = useState("All");

  const addExpense = () => {
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
    setCategory("Food");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((item) => item.category === filter);

  const totalExpense = filteredExpenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Expense Tracker
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <input
            type="text"
            placeholder="Expense Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded w-full mb-3"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-3 rounded w-full mb-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 rounded w-full mb-3"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Entertainment</option>
          </select>

          <button
            onClick={addExpense}
            className="bg-blue-500 text-white px-5 py-2 rounded"
          >
            Add Expense
          </button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold">
            Total: Rs {totalExpense}
          </h2>
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-3 rounded mb-6"
        >
          <option>All</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Entertainment</option>
        </select>

        <div className="space-y-4">
          {filteredExpenses.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between"
            >
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.category}</p>
              </div>

              <div className="flex gap-4 items-center">
                <span>Rs {item.amount}</span>

                <button
                  onClick={() => deleteExpense(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;