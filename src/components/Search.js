import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <button className="flex items-center px-2 py-2 bg-[#0F2C64] text-white rounded-sm " >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search in admin panel"
        className="border border-gray-300 rounded-r px-2 py-1"
      />
    </div>
  );
};

export default SearchBar;
