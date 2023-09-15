import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchButton = ({
    searchTerm,
    setSearchTerm,
}) => {
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="relative flex items-center w-search mr-auto ml-7">
            <div className="absolute inset-y-0 left-0 pl-3 ml-2 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-800" />
            </div>
            <input
                type="text"
                className="w-full text-base fontfamily-montserrat tracking-wide pl-12 h-14 pr-3 py-2 border-2 border-gray-400 rounded-md shadow-md placeholder-gray-400 bg-white "
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchButton;