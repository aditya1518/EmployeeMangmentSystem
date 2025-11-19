import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-3 screen lg:flex lg:gap-5  lg:h-35 lg:justify-between lg:items-center lg:mt-10">
      <div className="px-1 py-6 rounded-xl w-[45%] bg-indigo-500 lg:px-9 lg:py-6 lg:rounded-xl lg:w-[45%]  lg:h-35">
        <h2 className="text-3xl font-semibold flex justify-center lg:text-3xl lg:font-semibold">
          {data.taskCount.newTask}
        </h2>
        <h3 className="text-l font-medium flex justify-center flex-col items-center lg:text-lg lg:font-medium">
          New <span>Task</span>
        </h3>
      </div>
      
      <div className="px-1 py-6 rounded-xl w-[45%] bg-green-400 lg:px-9 lg:py-6 lg:rounded-xl lg:w-[45%]   lg:h-35">
        <h2 className="text-3xl font-semibold flex justify-center lg:text-3xl lg:font-semibold">
          {data.taskCount.active}
        </h2>
        <h3 className="text-l font-medium flex justify-center flex-col items-center lg:text-lg lg:font-medium">
          Accepted <span>Task</span> 
        </h3>
      </div>
      <div className="px-1 py-6 rounded-xl w-[45%] bg-lime-400 lg:px-9 lg:py-6 lg:rounded-xl lg:w-[45%]  lg:h-35">
        <h2 className="text-3xl font-semibold flex justify-center lg:text-3xl lg:font-semibold">
          {data.taskCount.completed}
        </h2>
        <h3 className="text-l font-medium flex justify-center flex-col items-center lg:text-lg lg:font-medium">
          Completed <span>Task</span>
        </h3>
      </div> 
      <div className="px-1 py-6 rounded-xl w-[45%] bg-rose-600 lg:px-9 lg:py-6 lg:rounded-xl lg:w-[45%]  lg:h-35">
        <h2 className="text-3xl font-semibold flex justify-center lg:text-3xl lg:font-semibold">
          {data.taskCount.failed}
        </h2>
        <h3 className="text-l font-medium flex justify-center flex-col items-center lg:text-lg lg:font-medium">
          Failed <span>Task</span>
        </h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
