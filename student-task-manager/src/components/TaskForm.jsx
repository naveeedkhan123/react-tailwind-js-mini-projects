import { useState } from "react";

function TaskForm({ addTask }) {

  const [task, setTask] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!task.trim()) return;

    addTask(task);

    setTask("");
  }



  return (

    <form 
      onSubmit={handleSubmit}
      className="
        flex
        gap-3
        mt-6
      "
    >

      <input

        type="text"

        placeholder="Write your task..."

        value={task}

        onChange={(e)=>setTask(e.target.value)}

        className="
          flex-1
          px-5
          py-3
          rounded-xl
          border
          border-gray-300
          outline-none
          focus:ring-2
          focus:ring-blue-500
          shadow-sm
        "

      />


      <button

        className="
          px-7
          rounded-xl
          bg-blue-600
          text-white
          font-semibold
          hover:bg-blue-700
          transition
          shadow-md
        "

      >
        Add
      </button>


    </form>

  );
}


export default TaskForm;