import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data, updateLoggedUserState }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const recalcTaskCount = (emp) => {
    emp.taskCount = {
      newTask: emp.tasks.filter(t => t.newTask).length,
      active: emp.tasks.filter(t => t.active).length,
      completed: emp.tasks.filter(t => t.completed).length,
      failed: emp.tasks.filter(t => t.failed).length,
    };
  };

  const save = (updated, updatedEmp) => {
    setUserData(updated);

    const logged = JSON.parse(localStorage.getItem("loggedInUser"));
    if (logged && logged.role === "employee") {
      logged.data = updatedEmp;
      localStorage.setItem("loggedInUser", JSON.stringify(logged));
    }

    updateLoggedUserState(updatedEmp);
  };

  const acceptTask = (task) => {
    const updated = [...userData];

    updated.forEach((emp) => {
      if (emp.firstName === data.firstName) {
        emp.tasks.forEach((t) => {
          if (t.title === task.title) {
            t.newTask = false;
            t.active = true;
          }
        });
        recalcTaskCount(emp);
      }
    });

    const updatedEmp = updated.find((e) => e.firstName === data.firstName);
    save(updated, updatedEmp);
  };

  const completeTask = (task) => {
    const updated = [...userData];

    updated.forEach((emp) => {
      if (emp.firstName === data.firstName) {
        emp.tasks.forEach((t) => {
          if (t.title === task.title) {
            t.active = false;
            t.completed = true;
          }
        });
        recalcTaskCount(emp);
      }
    });

    const updatedEmp = updated.find((e) => e.firstName === data.firstName);
    save(updated, updatedEmp);
  };

  const failTask = (task) => {
    const updated = [...userData];

    updated.forEach((emp) => {
      if (emp.firstName === data.firstName) {
        emp.tasks.forEach((t) => {
          if (t.title === task.title) {
            t.active = false;
            t.failed = true;
          }
        });
        recalcTaskCount(emp);
      }
    });

    const updatedEmp = updated.find((e) => e.firstName === data.firstName);
    save(updated, updatedEmp);
  };

  return (
    <div
      id="task-list"
      className="mt-4 flex flex-wrap gap-4 sm:gap-6 items-start h-80 md:overflow-x-auto md:w-full md:py-5 md:flex md:items-center md:justify-start md:gap-4 md:flex-nowrap md:mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active)
          return <AcceptTask key={idx} data={elem} completeTask={completeTask} failTask={failTask} />;

        if (elem.newTask)
          return <NewTask key={idx} data={elem} acceptTask={acceptTask} />;

        if (elem.completed)
          return <CompleteTask key={idx} data={elem} />;

        if (elem.failed)
          return <FailedTask key={idx} data={elem} />;

        return null;
      })}
    </div>
  );
};

export default TaskList;
