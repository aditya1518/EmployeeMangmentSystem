import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="task-list"
      className="h-[60%]  overflow-x-auto w-full py-5 flex items-center justify-start gap-4 flex-nowrap  mt-10"
    >
      {data.tasks.map((elem, idx)=>{
        if(elem.active){
        return <AcceptTask key={idx} data ={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data ={elem} />
        }
      
        if(elem.completed){
          return <CompleteTask key={idx} data ={elem} />
        }
          if(elem.failed){
          return <FailedTask key={idx} data ={elem} />
        }
        

      })}
      
    </div>
  );
};

export default TaskList;
