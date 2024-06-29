import React from 'react'

function ImagesSection() {
  return (
    <div className="h-[70vh] w-full bg-white flex justify-center items-center ">
        <div className='w-[40%] h-3/4 b-red-600 relative'>
            <div className="absolute w-20 h-[5rem] -right-[10%] top-6 bg-red-200"></div>
            <div className="absolute w-32 aspect-video -left-[20%] bg-red-300 top-1/3" ></div>
            <div className="absolute w-[10rem] aspect-video bg-red-600 -left-[60%] -bottom-10 "></div>
            <div className="absolute w-[10rem] aspect-[1.5/1] -right-[70%] bg-red-200 -bottom-[27%] "></div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1716881765668-5e191e9b284a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D" alt="" />
        </div>
      
    </div>
  )
}

export default ImagesSection