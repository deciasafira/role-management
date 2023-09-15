import { useState } from "react";

const CategoryButton = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedCategory(option);
    setShowDropdown(false);
  };

  const categories = ['All Categories', 'Role Name', 'Workset', 'Services'];

  return (
    <div className="inline-block relative w-dropdownCategory">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="pr-1 py-2 h-14 w-full text-left bg-white border-2 border-gray-400 rounded-md shadow-md focus:border-gray-700 sm:text-sm"
        type="button"
      >
        <div className="ml-5 flex justify-left items-center">
          <span className="truncate tracking-wide text-base text-gray-500">{selectedCategory}</span>
          
          <svg
            className={`h-6 ml-2 ${
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
        <ul className="absolute z-10 rounded rounded-md  mt-2 w-60 bg-white border border-gray-400 divide-y divide-gray-400 shadow-md">
          {categories.map((option, i) => (
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

export default CategoryButton;
