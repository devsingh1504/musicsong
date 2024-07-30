import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] px-6 py-2 ">
      {/* logo section */}
      <div className="flex items-center space-x-4">
        <Menu />
        <h1 className="text-3xl text-blue-600 cursor-pointer ">🎶Music</h1>
      </div>
      {/* search bar */}
      <div className="flex  w-[35%]">
        <div className="w-[100%] px-4 py-2 border border-gray-400 rounded-l-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            type="text"
            placeholder="Search songs"
            className="outline-none"
          />
        </div>
        {/* button */}
        <button
          className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100 hover:bg-slate-300 duration-300"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <Search />
        </button>
      </div>
      {/* profile section */}
      <div className=" pt-1">
        <UserRound className="w-8 h-8 border border-black rounded-full hover:bg-slate-100" />
      </div>
    </div>
  );
}
