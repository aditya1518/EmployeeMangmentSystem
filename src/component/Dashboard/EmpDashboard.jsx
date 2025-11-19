import React, { useEffect, useContext } from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmpDashboard = (props) => {
  const [userData] = useContext(AuthContext);

  // always pick the fresh employee object from context
  const freshEmployee = userData.find(
    (e) => e.firstName === props.data.firstName
  );

  useEffect(() => {
    const handleBack = () => {
      localStorage.removeItem("selectedEmployee");
      props.changeUser("");
    };
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#1c1c1c] h-screen">
      <div className="bg-[#1c1c1c] lg:h-auto">
        <Header changeUser={props.changeUser} data={freshEmployee} />
        <TaskListNumber data={freshEmployee} />
        <TaskList
          data={freshEmployee}
          updateLoggedUserState={props.updateLoggedUserState}
        />
      </div>
    </div>
  );
};

export default EmpDashboard;
