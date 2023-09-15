import { useState } from "react";

const RowsPerPage = ({
  selectedItemsPerPage,
  setSelectedItemsPerPage,
  setActivePage
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedItemsPerPage(option);
    setActivePage(1);
    setShowDropdown(false);
  };

  const itemsPerPage = ['10', '25', '50'];

  return (
    <div className="flex items-center justify-right w-fit">
      <div className="ml-2 text-gray-800 mr-4 text-lg">Rows per page:</div>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="h-8 w-16 text-right items-right bg-white border-2 border-gray-400 rounded-md shadow-md focus:border-gray-700 sm:text-sm"
        type="button"
      >
        <div className="ml-2 flex items-center">
          <div className="truncate text-right tracking-wide text-base text-gray-500">{selectedItemsPerPage}</div>
          
          <svg
            className={`h-5 ml-1 items-right ${
              showDropdown ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </button>
      {showDropdown && (
        <ul className="absolute rounded rounded-md mt-52 ml-itemsPerPage w-16 bg-white border border-gray-400 divide-y divide-gray-400 shadow-md">
          {itemsPerPage.map((option, i) => (
            <li
              key={i}
              onClick={() => handleOptionClick(option)}
              className="px-3 py-2 text-gray-600 cursor-pointer hover:bg-blue-400 hover:text-white truncate"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RowsPerPage;
