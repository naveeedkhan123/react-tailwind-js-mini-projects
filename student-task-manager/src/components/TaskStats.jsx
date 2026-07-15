function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="bg-blue-500 text-white rounded-xl p-5 shadow-lg">
        <h2 className="text-lg font-semibold">📋 Total Tasks</h2>
        <p className="text-3xl font-bold mt-2">{total}</p>
      </div>

      <div className="bg-green-500 text-white rounded-xl p-5 shadow-lg">
        <h2 className="text-lg font-semibold">✅ Completed</h2>
        <p className="text-3xl font-bold mt-2">{completed}</p>
      </div>

      <div className="bg-red-500 text-white rounded-xl p-5 shadow-lg">
        <h2 className="text-lg font-semibold">⏳ Pending</h2>
        <p className="text-3xl font-bold mt-2">{pending}</p>
      </div>
    </div>
  );
}

export default TaskStats;