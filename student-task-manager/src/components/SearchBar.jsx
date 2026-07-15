function SearchBar({ search, setSearch }) {

  return (

    <div className="mt-8">

      <input

        type="text"

        placeholder="🔍 Search your tasks..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="
          w-full
          px-5
          py-4
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-sm
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
        "

      />

    </div>

  );
}


export default SearchBar;