import React from 'react'

const NewTask = ({data}) => {
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
        <div className=" mt-4 flex justify-center">
          <button className="w-50 bg-green-500 py-1 px-4 text-sm rounded-2xl hover:cursor-pointer">
            Accept Task
          </button>
        
        </div>
    </div>
  )
}

export default NewTask
