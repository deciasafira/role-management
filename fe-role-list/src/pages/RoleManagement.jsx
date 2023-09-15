import React, { useState, useEffect } from "react";

// Component Role Management
import Headline from "../components/Headline";
import UnderlineTabs from "../components/UnderlineTabs";
import RowsPerPage from "../components/RowsPerPage";
import CategoryButton from "../components/CategoryButton";
import SearchButton from "../components/SearchButton";
import RoleTable from "../components/RoleTable";
import Pagination from "../components/Pagination";
import UserManagement from "./UserManagement";
import { paginate } from "../utils/Paginate";

// Dummy Data
import data from "../data/DataRoles";

// BE Integration W/ Redux
import { asyncReceiverRoles } from "../states/roles/Action";
import { useDispatch, useSelector } from "react-redux";

const RoleManagement = ({ showMap, setShowMap }) => {
  //   useEffect(() => {
  //     setRoles(data);
  //   }, [data]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiverRoles());
    // setusers(data);
  }, [dispatch]);

  //Underline Tabs
  const [showRoleList, setShowRoleList] = useState(true);
  const [showAddRole, setShowAddRole] = useState(false);

  //Category Button
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  //Search Button
  const [searchTerm, setSearchTerm] = useState("");

  //Rows Per Page Dropdown
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState("10");

  //Roles Table & Pagination
  //   const [roles, setRoles] = useState([]);
  //   const [activePage, setActivePage] = useState(1);
  //   const totalRoles = roles.length;

  const { roles = [] } = useSelector((states) => states);
//   console.log(roles);
  const [activePage, setActivePage] = useState(1);
  const totalRoles = roles.length;

  const renderRoleList = () => (
    <div>
      <div className="flex justify-between">
        <CategoryButton
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SearchButton searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RowsPerPage
          selectedItemsPerPage={selectedItemsPerPage}
          setSelectedItemsPerPage={setSelectedItemsPerPage}
          setActivePage={setActivePage}
        />
      </div>
      <div className="w-full mt-10">
        <RoleTable
          roles={roles}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          selectedItemsPerPage={selectedItemsPerPage}
          activePage={activePage}
        />
      </div>
      <div className="pt-16">
        <Pagination
          rolesPerPage={selectedItemsPerPage}
          totalRoles={totalRoles}
          paginate={() =>
            paginate({ current: selectedItemsPerPage, max: totalRoles })
          }
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col container mx-20">
      <Headline
        title="Role Management"
        showMap={showMap}
        setShowMap={setShowMap}
      />
      <UnderlineTabs
        showRoleList={showRoleList}
        setShowRoleList={setShowRoleList}
        showAddRole={showAddRole}
        setShowAddRole={setShowAddRole}
      />
      {showRoleList && renderRoleList()}
      {showAddRole && <UserManagement />}
    </div>
  );
};

export default RoleManagement;
