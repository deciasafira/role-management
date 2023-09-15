import React, { useState } from "react";
import ReactDOM from "react-dom";

// Component
import RoleManagement from "./pages/RoleManagement";
import UserManagement from "./pages/UserManagement";
import Sidebar from "./components/Sidebar";
import "./index.scss";

// Redux Integration
import { Provider } from "react-redux";
import store from "./states";

const App = () => {
  const [showRoleManagement, setShowRoleManagement] = useState(true);
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const runRolesManagement = () => (
    <Provider store={store}>
      <div className="w-full h-full">
      <div className="flex bg-bgMain">
        <Sidebar
          showRoleManagement={showRoleManagement}
          setShowRoleManagement={setShowRoleManagement}
          showUserManagement={showUserManagement}
          setShowUserManagement={setShowUserManagement}
        />
        {showRoleManagement && (
          <RoleManagement showMap={showMap} setShowMap={setShowMap} />
        )}
        {showUserManagement && <UserManagement />}
      </div>
    </div>
    </Provider>
  );

  const renderMap = () => (
    <div className="w-full h-full">
      <UserManagement />
    </div>
  );

  return showMap ? renderMap() : runRolesManagement();
};

ReactDOM.render(<App />, document.getElementById("app"));
