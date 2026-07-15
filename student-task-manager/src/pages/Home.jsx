import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskStats from "../components/TaskStats";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import TaskList from "../components/TaskList";


function Home() {


  const [tasks, setTasks] = useState(() => {

    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];

  });



  const [filter, setFilter] = useState("all");


  const [search, setSearch] = useState("");



  // Save Tasks in Local Storage

  useEffect(()=>{

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  },[tasks]);




  // Add Task

  const addTask = (taskText) => {

    const newTask = {

      id: Date.now(),

      text: taskText,

      completed: false

    };


    setTasks([
      ...tasks,
      newTask
    ]);

  };





  // Complete / Uncomplete Task

  const toggleTask = (id) => {


    setTasks(

      tasks.map((task)=>


        task.id === id

        ?

        {
          ...task,
          completed: !task.completed
        }

        :

        task

      )

    );


  };






  // Delete Task

  const deleteTask = (id) => {


    setTasks(

      tasks.filter(
        (task)=>task.id !== id
      )

    );


  };






  // Edit Task

  const editTask = (id, newText) => {


    setTasks(

      tasks.map((task)=>


        task.id === id

        ?

        {
          ...task,
          text:newText
        }

        :

        task


      )

    );


  };







  // Search + Filter Logic

  const filteredTasks = tasks.filter((task)=>{


    const filterMatch =

      filter === "completed"

      ?

      task.completed

      :

      filter === "pending"

      ?

      !task.completed

      :

      true;



    const searchMatch =

      task.text
      .toLowerCase()
      .includes(
        search.toLowerCase()
      );



    return filterMatch && searchMatch;


  });







  return (


    <div className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      to-blue-100
    ">


      <Navbar />



      <main className="
        max-w-5xl
        mx-auto
        px-5
        py-10
      ">



        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          p-8
        ">




          <h1 className="
            text-4xl
            font-bold
            text-center
            text-gray-800
            mb-8
          ">

            Manage Your Tasks 🚀

          </h1>





          <TaskForm
            addTask={addTask}
          />





          <TaskStats
            tasks={tasks}
          />






          <SearchBar

            search={search}

            setSearch={setSearch}

          />







          <div className="mt-8">


            <Filter

              filter={filter}

              setFilter={setFilter}

            />


          </div>







          <TaskList

            tasks={filteredTasks}

            toggleTask={toggleTask}

            deleteTask={deleteTask}

            editTask={editTask}

          />





        </div>



      </main>



    </div>


  );

}


export default Home;