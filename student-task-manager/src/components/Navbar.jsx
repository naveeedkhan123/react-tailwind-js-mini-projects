
function Navbar() {
  return (
    <nav className="
      bg-white/80 
      backdrop-blur-lg 
      shadow-md
      border-b
    ">
      <div className="
        max-w-5xl 
        mx-auto 
        px-5 
        py-5
        flex 
        justify-between 
        items-center
      ">

        <h1 className="
          text-2xl
          md:text-3xl
          font-extrabold
          text-blue-600
        ">
          📋 Task Manager
        </h1>


        <span className="
          hidden
          md:block
          text-gray-600
          font-medium
        ">
          React + Tailwind
        </span>


      </div>
    </nav>
  );
}

export default Navbar;