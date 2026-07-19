import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">{props.id + 1}</h2>
        <div>
          <p className="text-white text-lg leading-relaxed mb-14">
           {props.intro}
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">{props.tag}</button>
            <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full "><i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent