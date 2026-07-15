import TaskCard from "./TaskCard";


function TaskList({ 
  tasks, 
  toggleTask, 
  deleteTask, 
  editTask 
}) {


  // Empty State
  if(tasks.length === 0){

    return (

      <div className="
        mt-8
        bg-white
        rounded-3xl
        shadow-md
        p-10
        text-center
      ">

        <div className="
          text-6xl
          mb-4
        ">
          📋
        </div>


        <h2 className="
          text-2xl
          font-bold
          text-gray-700
        ">
          No Tasks Available
        </h2>


        <p className="
          text-gray-500
          mt-2
        ">
          Add your first task and start managing your work 🚀
        </p>


      </div>

    );

  }



  return (

    <div className="
      space-y-4
      mt-8
    ">

      {
        tasks.map((task)=>(

          <TaskCard
  key={task.id}
  task={task}
  toggleTask={toggleTask}
  deleteTask={deleteTask}
  editTask={editTask}
/>

        ))
      }


    </div>

  );

}


export default TaskList;