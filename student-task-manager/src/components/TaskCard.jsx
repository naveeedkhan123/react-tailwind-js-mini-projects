import { useState } from "react";


function TaskCard({ task, toggleTask, deleteTask, editTask }) {

  const [isEditing, setIsEditing] = useState(false);

  const [newText, setNewText] = useState(task.text);



  const handleEdit = () => {

    if(newText.trim()){

      editTask(task.id, newText);

      setIsEditing(false);

    }

  };



  return (

    <div
      className={`
        flex
        items-center
        justify-between
        p-5
        rounded-2xl
        shadow-md
        border
        transition
        hover:shadow-xl

        ${
          task.completed
          ?
          "bg-green-50 border-green-200"
          :
          "bg-white border-gray-200"
        }
      `}
    >


      <div className="flex items-center gap-4 flex-1">


        <button

          onClick={()=>toggleTask(task.id)}

          className="
            w-10
            h-10
            rounded-full
            bg-green-500
            text-white
            font-bold
          "

        >

          {task.completed ? "✓" : "○"}

        </button>



        {
          isEditing ?

          (

            <input

              value={newText}

              onChange={(e)=>setNewText(e.target.value)}

              className="
                flex-1
                border
                rounded-lg
                px-3
                py-2
              "

            />

          )

          :

          (

            <p
              className={`
                text-lg
                ${
                  task.completed
                  ?
                  "line-through text-gray-400"
                  :
                  "text-gray-700"
                }
              `}
            >

              {task.text}

            </p>

          )

        }


      </div>




      <div className="flex gap-2 ml-4">


        {
          isEditing ?

          (

            <button

              onClick={handleEdit}

              className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-xl
              "

            >

              Save

            </button>

          )

          :

          (

            <button

              onClick={()=>setIsEditing(true)}

              className="
                bg-yellow-400
                px-4
                py-2
                rounded-xl
              "

            >

              Edit

            </button>

          )

        }



        <button

          onClick={()=>deleteTask(task.id)}

          className="
            bg-red-500
            text-white
            px-4
            py-2
            rounded-xl
          "

        >

          Delete

        </button>



      </div>


    </div>

  );
}


export default TaskCard;