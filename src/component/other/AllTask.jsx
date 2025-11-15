import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded  ">
      <div className="bg-red-500 py-2 px-4 flex justify-between rounded mt-1 ">
        <h2 className="w-1/5 text-lg font-medium  flex justify-center ">Employee Name</h2>
        <h3 className="w-1/5  text-lg font-medium flex justify-center">New Task</h3>
        <h5 className="w-1/5  text-lg font-medium flex justify-center">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium  flex justify-center">Complete Task</h5>
        <h5 className="w-1/5 text-lg font-medium  flex justify-center">Failed Task</h5>
      </div>
      <div id="all-tasks" className=" mt-1 rounded overflow-auto">
        {userData.map(function (elem , idx) {
          return (
            <div className=" border-2 border-emerald-400 py-2 px-4 flex justify-between rounded mt-2" key={idx}>
              <h2 className="w-1/5 flex justify-center">{elem.firstName}</h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-600 flex justify-center">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400  flex justify-center">
                {elem.taskCount.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-green-600 flex justify-center">
                {elem.taskCount.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-600 flex justify-center">
                {elem.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
