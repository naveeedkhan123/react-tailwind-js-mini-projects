import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "118b1561b4bbbab8d1b5999917c0a6cf";

  const fetchMovies = async () => {
    if (!search.trim()) {
      alert("Please enter a movie name");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      );

      const data = await response.json();

      console.log(data);

      setMovies(data.results || []);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">
          Movie Search App
        </h1>

        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Search Movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border p-3 rounded-lg bg-white"
          />

          <button
            onClick={fetchMovies}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {loading && (
          <h2 className="text-center text-xl font-semibold">
            Loading...
          </h2>
        )}

        {!loading && movies.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-80 object-cover"
                  />
                ) : (
                  <div className="h-80 flex items-center justify-center bg-gray-200">
                    No Image
                  </div>
                )}

                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2">
                    {movie.title}
                  </h2>

                  <p>⭐ {movie.vote_average}</p>

                  <p>📅 {movie.release_date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && movies.length === 0 && (
          <p className="text-center text-gray-500">
            Search a movie to see results
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
