import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MySearchBar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      navigate(`/details/${inputValue}`);
    }
  };

  return (
    <div className="search-bar flex items-center justify-center mt-6">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Inserisci una città..."
        className=" p-2 rounded-l-lg"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-500 text-white rounded-r-lg p-2  hover:bg-blue-600"
      >
        Cerca
      </button>
    </div>
  );
}

export default MySearchBar;
