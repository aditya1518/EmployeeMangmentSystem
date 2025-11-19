import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-full p-4 bg-lime-400 rounded-xl flex flex-col md:flex-shrink-0 md:h-60 md:w-[370px] md:p-5  md:rounded-xl md:flex md:flex-col">
      <div className="flex justify-between items-center text-sm">
        <span className="px-3 py-1 rounded bg-emerald-800 text-white text-xs">{data.category}</span>
        <span className="text-sm">{data.date}</span>
      </div>

      <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold line-clamp-2">{data.title}</h2>
      <p className="mt-2 text-sm sm:text-sm md:text-base flex-grow line-clamp-4">{data.description}</p>

      <div className="mt-4">
        <span className="text-sm rounded  font-medium text-white">Completed ✅</span>
      </div>
    </div>
  );
};

export default CompleteTask;
