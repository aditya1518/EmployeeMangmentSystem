import React from "react";

const NewTask = ({ data, acceptTask }) => {
  return (
    <div className="flex-shrink-0 w-full p-4 bg-indigo-500 rounded-xl flex flex-col md:flex-shrink-0 md:h-60 md:w-[370px] md:p-5  md:rounded-xl md:flex md:flex-col">
      <div className="flex justify-between items-center text-sm">
        <span className="px-3 py-1 rounded bg-emerald-800 text-white text-xs">{data.category}</span>
        <span className="text-sm">{data.date}</span>
      </div>

      <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold line-clamp-2">{data.title}</h2>
      <p className="mt-2 text-sm sm:text-sm md:text-base flex-grow line-clamp-4">{data.description}</p>

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => acceptTask(data)}
          className="w-full sm:w-auto bg-green-500 py-2 px-4 text-sm rounded-2xl hover:cursor-pointer"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
