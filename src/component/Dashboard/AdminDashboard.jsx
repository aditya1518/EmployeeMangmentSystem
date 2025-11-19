import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDashboard(props) {
  return (
    <div className="lg:p-7 p-3 w-full h-screen">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask setSelectedEmployee={props.setSelectedEmployee} />
    </div>
  );
}

export default AdminDashboard;
