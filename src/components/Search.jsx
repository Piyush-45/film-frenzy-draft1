import React from "react";
import { useState } from "react";


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <input
        type="text"
        class="px-4 py-2 mr-4 bg-transparent rounded-full outline-none  placeholder-white border-2 border-slate-300 focus:outline-2  focus:outline-red-900  focus:border-none"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
};

export default Search;
