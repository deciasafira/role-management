// import React, { useEffect, useState } from "react";
// import {
//   MdManageSearch,
//   MdOutlineEdit,
//   MdOutlineDeleteForever,
// } from "react-icons/md";
// import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
// import { sortByRoleName, sortByWorkset, sortByServices } from "../utils/Sort";

// const RoleTable = ({
//   roles,
//   selectedCategory,
//   searchTerm,
//   selectedItemsPerPage,
//   activePage,
// }) => {
//   const [sortField, setSortField] = useState(null);
//   const [sortDirection, setSortDirection] = useState("asc");

//   const toggleSort = (field) => {
//     if (field === sortField) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc");
//     } else {
//       setSortField(field);
//       setSortDirection("asc");
//     }
//   };

//   const sortedRoles = () => {
//     let filteredRoles = [...roles]; // Create a new array from Roles
//     // Filter based on selectedCategory and searchTerm
//     if (selectedCategory === "All Categories") {
//       filteredRoles = filteredRoles.filter(
//         (role) =>
//           role.role_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           role.workset.some((workset) =>
//             workset.toLowerCase().includes(searchTerm.toLowerCase())
//           ) ||
//           role.services.some((services) =>
//             services.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//       );
//     } else if (selectedCategory === "Role Name") {
//       filteredRoles = filteredRoles.filter((role) =>
//         role.role_name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     } else if (selectedCategory === "Workset") {
//       filteredRoles = filteredRoles.filter((role) =>
//         role.workset.some((workset) =>
//           workset.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     } else if (selectedCategory === "Services") {
//       filteredRoles = filteredRoles.filter((role) =>
//         role.services.some((services) =>
//           services.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     }

//     // Sort the filtered Roles
//     switch (sortField) {
//       case "role_name":
//         return sortByRoleName(filteredRoles, sortDirection);
//       case "workset":
//         return sortByWorkset(filteredRoles, sortDirection);
//       case "services":
//         return sortByServices(filteredRoles, sortDirection);
//       default:
//         return filteredRoles;
//     }
//   };

//   // Calculate the range of entries to display for the active page
//   const startEntry = (activePage - 1) * selectedItemsPerPage;
//   const endEntry = Math.min(
//     activePage * selectedItemsPerPage,
//     sortedRoles().length
//   );

//   // Slice the data for the current page
//   const paginatedRoles = sortedRoles().slice(startEntry, endEntry);

//   // Calculate the starting index based on the current page and items per page
//   const startIndex = (activePage - 1) * selectedItemsPerPage + 1;

//   return (
//     <div className="bg-white">
//       <table className="min-w-full">
//         <thead className="bg-main">
//           <tr>
//             <th className="py-2 text-start text-white border-b border-black">
//               No
//             </th>
//             <th className="text-left pl-14 text-white border-b border-black">
//               {" "}
//               Role Name
//               <button
//                 title="Sort by name"
//                 className="text-white hover:text-gray-300 ml-2"
//                 onClick={() => toggleSort("role_name")}
//               >
//                 {sortField === "role_name" && sortDirection === "asc" ? (
//                   <FaSortAlphaDownAlt />
//                 ) : (
//                   <FaSortAlphaDown />
//                 )}
//               </button>
//             </th>
//             <th className="text-left pl-16 text-white border-b border-black">
//               Workset
//               <button
//                 title="Sort by workset"
//                 className="text-white hover:text-gray-300 ml-2"
//                 onClick={() => toggleSort("workset")}
//               >
//                 {sortField === "workset" && sortDirection === "asc" ? (
//                   <FaSortAlphaDownAlt />
//                 ) : (
//                   <FaSortAlphaDown />
//                 )}
//               </button>
//             </th>
//             <th className="text-left pl-24 text-white border-b border-black">
//               Services
//               <button
//                 title="Sort by services"
//                 className="text-white hover:text-gray-300 ml-2"
//                 onClick={() => toggleSort("services")}
//               >
//                 {sortField === "services" && sortDirection === "asc" ? (
//                   <FaSortAlphaDownAlt />
//                 ) : (
//                   <FaSortAlphaDown />
//                 )}
//               </button>
//             </th>
//             <th className="text-right pr-12 text-white border-b border-black">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedRoles.map((role, index) => (
//             <tr key={role.id}>
//               <td className="py-1 text-center border-b border-black">
//                 {startIndex + index}
//               </td>
//               <td className="py-1 text-left pl-14 border-b border-black">
//                 {role.role_name}
//               </td>
//               <td className="py-1 text-left pl-16 border-b border-black">
//                 {role.workset.join(", ")}
//               </td>
//               <td className="w-1/3 overflow-x-auto py-1 text-left pl-24 border-b border-black">
//                 {role.services.join(", ")}
//               </td>
//               <td className="py-1 text-right pr-6 border-b border-black">
//                 <button
//                   title="View Details"
//                   className="text-black-500 hover:text-black-700 mx-2"
//                 >
//                   <MdManageSearch className="w-6 h-6" />
//                 </button>
//                 <button
//                   title="Edit"
//                   className="text-black-500 hover:text-black-700 mx-2"
//                 >
//                   <MdOutlineEdit className="w-6 h-6" />
//                 </button>
//                 <button
//                   title="Delete"
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <MdOutlineDeleteForever className="w-6 h-6" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoleTable;

import React, { useEffect, useState } from "react";
import {
  MdManageSearch,
  MdOutlineEdit,
  MdOutlineDeleteForever,
} from "react-icons/md";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import { sortByRoleName, sortByWorkset, sortByServices } from "../utils/Sort";

const RoleTable = ({
  roles,
  selectedCategory,
  searchTerm,
  selectedItemsPerPage,
  activePage,
}) => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const toggleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedRoles = () => {
    let filteredRoles = [...roles]; // Use the new JSON structure
    // Filter based on selectedCategory and searchTerm

    console.log(filteredRoles)
    if (selectedCategory === "All Categories") {
      filteredRoles = filteredRoles.filter(
        (role) =>
          role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          role.worksets.some((workset) =>
            workset.workset.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          role.services.some((service) =>
            service.service.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    } else if (selectedCategory === "Role Name") {
      filteredRoles = filteredRoles.filter((role) =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (selectedCategory === "Workset") {
      filteredRoles = filteredRoles.filter((role) =>
        role.worksets.some((workset) =>
          workset.workset.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (selectedCategory === "Services") {
      filteredRoles = filteredRoles.filter((role) =>
        role.services.some((service) =>
          service.service.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Sort the filtered Roles
    switch (sortField) {
      case "role_name":
        return sortByRoleName(filteredRoles, sortDirection);
      case "workset":
        return sortByWorkset(filteredRoles, sortDirection);
      case "services":
        return sortByServices(filteredRoles, sortDirection);
      default:
        return filteredRoles;
    }
    return sortByRoleName(roles, sortDirection);
  };

  // Calculate the range of entries to display for the active page
  const startEntry = (activePage - 1) * selectedItemsPerPage;
  const endEntry = Math.min(
    activePage * selectedItemsPerPage,
    sortedRoles().length
  );

  // Slice the data for the current page
  const paginatedRoles = sortedRoles().slice(startEntry, endEntry);

  // Calculate the starting index based on the current page and items per page
  const startIndex = (activePage - 1) * selectedItemsPerPage + 1;

  return (
    <div className="bg-white">
      <table className="min-w-full">
        <thead className="bg-main">
          <tr>
            <th className="py-2 text-start text-white border-b border-black">
              No
            </th>
            <th className="text-left pl-14 text-white border-b border-black">
              {" "}
              Role Name
              <button
                title="Sort by name"
                className="text-white hover:text-gray-300 ml-2"
                onClick={() => toggleSort("role_name")}
              >
                {sortField === "role_name" && sortDirection === "asc" ? (
                  <FaSortAlphaDownAlt />
                ) : (
                  <FaSortAlphaDown />
                )}
              </button>
            </th>
            <th className="text-left pl-16 text-white border-b border-black">
              Workset
              <button
                title="Sort by workset"
                className="text-white hover:text-gray-300 ml-2"
                onClick={() => toggleSort("workset")}
              >
                {sortField === "workset" && sortDirection === "asc" ? (
                  <FaSortAlphaDownAlt />
                ) : (
                  <FaSortAlphaDown />
                )}
              </button>
            </th>
            <th className="text-left pl-24 text-white border-b border-black">
              Services
              <button
                title="Sort by services"
                className="text-white hover:text-gray-300 ml-2"
                onClick={() => toggleSort("services")}
              >
                {sortField === "services" && sortDirection === "asc" ? (
                  <FaSortAlphaDownAlt />
                ) : (
                  <FaSortAlphaDown />
                )}
              </button>
            </th>
            <th className="text-right pr-12 text-white border-b border-black">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedRoles.map((role, index) => (
            <tr key={role.id}>
              <td className="py-1 text-center border-b border-black">
                {startIndex + index}
              </td>
              <td className="py-1 text-left pl-14 border-b border-black">
                {role.name}
              </td>
              <td className="py-1 text-left pl-16 border-b border-black">
                {role.worksets.map((workset) => workset.workset.name).join(", ")}
              </td>
              <td className="w-1/3 overflow-x-auto py-1 text-left pl-24 border-b border-black">
                {role.services.map((service) => service.service.name).join(", ")}
              </td>
              <td className="py-1 text-right pr-6 border-b border-black">
                <button
                  title="View Details"
                  className="text-black-500 hover:text-black-700 mx-2"
                >
                  <MdManageSearch className="w-6 h-6" />
                </button>
                <button
                  title="Edit"
                  className="text-black-500 hover:text-black-700 mx-2"
                >
                  <MdOutlineEdit className="w-6 h-6" />
                </button>
                <button
                  title="Delete"
                  className="text-red-500 hover:text-red-700"
                >
                  <MdOutlineDeleteForever className="w-6 h-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleTable;

