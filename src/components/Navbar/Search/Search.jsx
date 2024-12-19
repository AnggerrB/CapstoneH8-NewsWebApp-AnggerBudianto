import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) {
      alert("Masukkan kata kunci pencarian.");
      return;
    }

    navigate(`/news/${search.trim()}`);
    setSearch("");
  };

  return (
    <div className="flex items-center border rounded-lg bg-gray-800 px-2 py-1 w-full md:w-auto md:ml-28">
      <input
        type="text"
        className="outline-none bg-transparent text-white px-2 py-1 w-[640px]"
        placeholder="Explore news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
