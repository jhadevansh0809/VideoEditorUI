import React from "react";

const Search = () => {
  return (
    <div className="flex w-full h-12 mr-16">
      <input
        type="search"
        className="outline-none border-2 shadow-sm rounded-lg p-2 w-full"
        placeholder="Search"
      />

      <span className="flex items-center cursor-pointer px-3 py-1.5 text-center rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default Search;
