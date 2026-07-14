import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const addNote = () => {
    if (note.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: note,
    };

    setNotes([...notes, newNote]);
    setNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  const filteredNotes = notes.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Notes App
        </h1>

        {/* Add Note */}

        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <input
            type="text"
            placeholder="Enter note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border w-full p-3 rounded mb-4"
          />

          <button
            onClick={addNote}
            className="bg-blue-500 text-white px-5 py-2 rounded"
          >
            Add Note
          </button>
        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border w-full p-3 rounded mb-6"
        />

        {/* Notes */}

        <div className="space-y-4">
          {filteredNotes.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <p>{item.text}</p>

              <button
                onClick={() => deleteNote(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;