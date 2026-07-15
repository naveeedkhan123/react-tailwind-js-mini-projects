function Filter({ filter, setFilter }) {

  const buttons = [
    {
      name: "All",
      value: "all"
    },
    {
      name: "Completed",
      value: "completed"
    },
    {
      name: "Pending",
      value: "pending"
    }
  ];


  return (

    <div className="
      flex
      justify-center
      gap-4
      flex-wrap
    ">


      {
        buttons.map((btn)=>(

          <button

            key={btn.value}

            onClick={()=>setFilter(btn.value)}

            className={`
              px-6
              py-3
              rounded-full
              font-semibold
              transition
              duration-300
              shadow-sm

              ${
                filter === btn.value

                ?

                "bg-blue-600 text-white shadow-lg scale-105"

                :

                "bg-white text-gray-600 hover:bg-blue-50"

              }

            `}

          >

            {btn.name}

          </button>


        ))
      }


    </div>

  );
}


export default Filter;