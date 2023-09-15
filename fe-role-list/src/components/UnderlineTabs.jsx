import React, { useState } from "react";
import { Tabs, TabsHeader, Tab, } from "@material-tailwind/react";

const UnderlineTabs = ({
  showRoleList,
  setShowRoleList,
  showAddRole,
  setShowAddRole,
}) => {
    const [activeTab, setActiveTab] = useState("Role List");
    const data = [
      {
        label: "Role List",
        value: "Role List",
      },
      {
        label: "Add Role",
        value: "Add Role",
      },
    ];

    const toggleRoleList = (value) => {
      setActiveTab(value)
      setShowRoleList(true)
      setShowAddRole(false)
    };

    const toggleAddRole = (value) => {
      setActiveTab(value)
      setShowAddRole(true)
      setShowRoleList(false)
    };

    return (
      <Tabs value={activeTab} className="pb-10">
        <TabsHeader
          className="rounded-none border-b border-gray-400 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-main shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => (value === "Add Role" ? toggleAddRole(value) : toggleRoleList(value))}
              className={`${
                activeTab === value ? "text-xl text-main font-semibold" : "text-xl text-gray-500 font-medium"
              } w-1/12 cursor-pointer`}            
              >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    );
  }

export default UnderlineTabs;