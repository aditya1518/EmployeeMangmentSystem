import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);


  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [taskCreated, setTaskCreated] = useState([]);

  const sunbmitHandler = (e) => {
    e.preventDefault();
    const newTaskObj=({
      title,
      date,
      assignTo,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
    setTaskCreated(newTaskObj);
    const data = userData;  
  
    
    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTaskObj);
        elem.taskCount.newTask += 1;
        localStorage.setItem("employees", JSON.stringify(data));
      
      }
    });
    setUserData([...data]);
    console.log([...data]);
    
    

    setAssignTo("");
    setCategory("");
    setDate("");
    setDescription("");
    setTitle("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => sunbmitHandler(e)}
        className=" flex-wrap flex w-full items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Make UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input required
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <select
  value={assignTo}
  onChange={(e) => setAssignTo(e.target.value)}
              required
              id="task-list"
  className="text-sm py-1 px-2 w-4/5 rounded mb-4
    bg-[#2b2b2b] border border-gray-600 
    text-gray-200 focus:border-emerald-500 
    focus:ring-2 focus:ring-emerald-600 
    cursor-pointer outline-none
  "
>
  <option value="" >Select Employee</option>

  {userData.map((emp, idx) => (
    <option key={idx} value={emp.firstName}>
      {emp.firstName}
    </option>
  ))}
</select>

          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input required
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Design, Development, etc..."
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Task Description</h3>
          <textarea required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "
            placeholder="Explain Works "
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-500 hover:cursor-pointer hover:bg-emerald-600 text-sm py-3 px-5 rounded mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
