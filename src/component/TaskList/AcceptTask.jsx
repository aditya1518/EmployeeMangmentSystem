import React from "react";

const AcceptTask = ({ data }) => {
  console.log();
  return (
    
      <div className="flex-shrink-0 h-full w-[348px] p-5 bg-red-400 rounded-xl flex flex-col">
        <div className="flex justify-between items-center text-sm">
        <h3 className="px-3 py-1 rounded bg-red-600">{data.category}</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="mt-2 text-sm flex-grow">
          {data.description}
        </p>
        <div className="flex justify-between mt-4">
          <button className=" w-40 bg-green-600 py-1 px-4 text-sm rounded-2xl hover:cursor-pointer">
            Mark as Completed
          </button>
          <button className="w-33 bg-red-500 py-1 px-4 text-sm rounded-2xl hover:cursor-pointer">
            Mark as Failed
          </button>
        </div>
      </div>
    
  );
};

export default AcceptTask;
