import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { SiNginxproxymanager } from "react-icons/si";

const Sidebar = ({
  // Role Management
  showRoleManagement,
  setShowRoleManagement,

  // User Management
  showUserManagement,
  setShowUserManagement,
}) => {
  // Role Management
  const toggleRoleManagement = () => {
    setShowRoleManagement(true);
    setShowUserManagement(false);
  };

  // User Management
  const toggleUserManagement = () => {
    setShowUserManagement(true);
    setShowRoleManagement(false);
  };

  return (
    <div className="w-1/12 h-screen flex flex-col justify-center items-center bg-main sticky top-0">
      {/* Role Management */}
      <button className="w-full my-2 mx-2 hover:bg-white hover:bg-opacity-20">
        <HiMiniUserGroup
          className="m-auto w-10 h-10 text-white"
          onClick={toggleUserManagement}
        />
      </button>
      {/* User Management */}
      <button className="w-full my-2 mx-2 hover:bg-white hover:bg-opacity-20">
        <SiNginxproxymanager
          className="m-auto w-10 h-10 mt-1 text-white"
          onClick={toggleRoleManagement}
        />
      </button>
    </div>
  );
};

export default Sidebar;
